import { Box } from "@material-ui/core"
import React from "react"
import AddComment from "./AddComment"
import Comment from "./Comment"

const Comments = ({ comments, onCreate }) => {
  return (
    <Box>
      <AddComment onCreate={onCreate} />
      {comments.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))}
    </Box>
  )
}

export default Comments
