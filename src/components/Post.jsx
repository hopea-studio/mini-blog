import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core"
import { blue } from "@material-ui/core/colors"
import moment from "moment"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { firestore } from "../firebase"
import { userContext } from "../providers/UsersProvider"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: blue[600],
  },
}))

const Post = ({ id, title, content, comments, stars, createdAt, user }) => {
  const classes = useStyles()
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
    <Grid item>
      <Card className={classes.card}>
        <CardContent>
          <Link to={`/posts/${id}`}>
            <Typography variant="h5">{title}</Typography>
          </Link>
          <Typography>{content}</Typography>
          <Typography>Comments: {comments}</Typography>
          <Typography>
            Created At{moment(createdAt.toDate()).calendar()}
          </Typography>
          <Typography>⭐️{stars}</Typography>
          <Typography>Created By{user.displayName}</Typography>
          <Avatar src={user.photoURL} />
          <Button onClick={star}>Star</Button>
          {checkCurrentUser(currentUser, user) && (
            <Button onClick={remove}>delete</Button>
          )}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Post
