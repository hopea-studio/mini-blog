import { Box, Card, CardContent, Typography } from "@material-ui/core"
import React from "react"

const Post = ({ title, content }) => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography>{content}</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Post
