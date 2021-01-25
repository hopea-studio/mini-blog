import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core"
import { yellow } from "@material-ui/core/colors"
import moment from "moment"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { firestore } from "../firebase"
import { userContext } from "../providers/UsersProvider"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: yellow[400],
  },
  content: {
    flexGrow: 1,
  },
  cardContent: {
    height: 325,
  },
  container: {
    height: "100%",
  },
  title: {
    textDecoration: "none",
    border: "3px dotted grey",
    borderRadius: "4px",
    padding: "2px 4px",
    color: "black",
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
    <Grid item md={4} xs={12} sm={6} lg={3} xl={2}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Grid
            container
            direction="column"
            className={classes.container}
            spacing={1}
          >
            <Grid item container justify="space-between">
              <Typography
                variant="h5"
                paragraph
                component={Link}
                to={`/posts/${id}`}
                className={classes.title}
              >
                {title.toUpperCase()}
              </Typography>
              <Avatar src={user.photoURL} />
            </Grid>
            <Grid item className={classes.content}>
              <Typography variant="h6" gutterBottom>
                {content}
              </Typography>
            </Grid>
            <Grid item container justify="space-between">
              <Typography>Comments: {comments}</Typography>
              <Typography>⭐️{stars}</Typography>
            </Grid>
            <Grid item container justify="space-between">
              <Typography>
                Created At: {moment(createdAt.toDate()).calendar()}
              </Typography>

              <Typography>Created By {user.displayName}</Typography>
            </Grid>
            <Grid
              item
              container
              justify={
                checkCurrentUser(currentUser, user)
                  ? "space-between"
                  : "flex-end"
              }
            >
              {checkCurrentUser(currentUser, user) && (
                <Button onClick={remove} variant="outlined">
                  delete
                </Button>
              )}
              <Button onClick={star} variant="outlined">
                Star
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Post
