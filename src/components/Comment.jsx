import { Box, Typography } from "@material-ui/core"
import moment from "moment"
import React from "react"

const Comment = ({ content, user, createdAt }) => {
  return (
    <Box>
      <Typography>{user.displayName}</Typography>
      <Typography>{content}</Typography>
      <Typography>
        {createdAt && moment(createdAt.toDate()).calendar()}
      </Typography>
    </Box>
  )
}

export default Comment
