import { Grid } from "@material-ui/core"
import React from "react"
import AddComment from "./AddComment"
import Comment from "./Comment"

const Comments = ({ comments, onCreate }) => {
  return (
    <Grid item container spacing={3} alignItems="center" direction="column">
      <AddComment onCreate={onCreate} />
      {comments.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))}
    </Grid>
  )
}

export default Comments
