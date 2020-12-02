import { Box, Button, Card, CardContent, Typography } from "@material-ui/core"
import moment from "moment"
import React, { useContext } from "react"
import { firestore } from "../firebase"
import { userContext } from "../providers/UsersProvider"

const Post = ({ id, title, content, comments, stars, createdAt }) => {
  const postRef = firestore.doc(`posts/${id}`)
  const remove = () => postRef.delete()
  const star = () => postRef.update({ stars: stars + 1 })
  const user = useContext(userContext)
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography>{content}</Typography>
          <Typography>{comments}</Typography>
          <Typography>{moment(createdAt.toDate()).calendar()}</Typography>
          <Typography>⭐️{stars}</Typography>
          <Typography>{user.displayName}</Typography>
          <Button onClick={star}>Star</Button>
          <Button onClick={remove}>delete</Button>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Post
