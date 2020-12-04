import { Box, Button, TextField } from "@material-ui/core"
import React, { useState } from "react"

const AddComment = ({ onCreate }) => {
  const [content, setContent] = useState("")

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onCreate({ content: content, createdAt: new Date() })
    setContent("")
  }

  return (
    <Box>
      <TextField
        name="content"
        placeholder="Comment"
        value={content}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Add Comment</Button>
    </Box>
  )
}

export default AddComment
