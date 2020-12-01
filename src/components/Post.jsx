import { Box, Button, Card, CardContent, Typography } from "@material-ui/core"
import moment from "moment"
import React from "react"
import { firestore } from "../firebase"

const Post = ({ id, title, content, comments, stars, createdAt }) => {
  const postRef = firestore.doc(`posts/${id}`)
  const remove = () => postRef.delete()
  const star = () => postRef.update({ stars: stars + 1 })

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography>{content}</Typography>
          <Typography>{comments}</Typography>
          <Typography>{moment(createdAt.toDate()).calendar()}</Typography>
          <Typography>⭐️{stars}</Typography>
          <Button onClick={star}>Star</Button>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Post
