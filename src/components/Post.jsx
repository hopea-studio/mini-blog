import { Box, Button, Card, CardContent, Typography } from "@material-ui/core"
import moment from "moment"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { firestore } from "../firebase"
import { userContext } from "../providers/UsersProvider"

const Post = ({ id, title, content, comments, stars, createdAt, user }) => {
  const postRef = firestore.doc(`posts/${id}`)
  const remove = () => postRef.delete()
  const star = () => postRef.update({ stars: stars + 1 })

  const currentUser = useContext(userContext)
  const checkCurrentUser = (currentUser, user) => {
    if (currentUser) {
      if (currentUser.uid === user.uid) {
        return true
      }
    } else {
      return false
    }
  }

  return (
    <Box>
      <Card>
        <CardContent>
          <Link to={`/posts/${id}`}>
            <Typography variant="h5">{title}</Typography>
          </Link>
          <Typography>{content}</Typography>
          <Typography>{comments}</Typography>
          <Typography>{moment(createdAt.toDate()).calendar()}</Typography>
          <Typography>⭐️{stars}</Typography>
          <Typography>{user.displayName}</Typography>
          <Button onClick={star}>Star</Button>
          {checkCurrentUser(currentUser, user) && (
            <Button onClick={remove}>delete</Button>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}

export default Post
