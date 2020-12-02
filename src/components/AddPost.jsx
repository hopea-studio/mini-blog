import { Box, Button, TextField } from "@material-ui/core"
import React, { useState } from "react"
import { firestore, auth } from "../firebase"

const initialState = {
  title: "",
  content: "",
}

const AddPost = () => {
  const [state, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { title, content } = state
    const { uid, displayName, email, photoURL } = auth.currentUser || {}

    const post = {
      title,
      content,
      stars: 0,
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
      user: {
        uid,
        displayName,
        email,
        photoURL,
      },
    }
    firestore.collection("posts").doc(post.id).set(post)

    setState(initialState)
  }

  return (
    <Box>
      <TextField
        name="title"
        value={state.title}
        id="title"
        onChange={handleChange}
      />
      <TextField
        name="content"
        value={state.content}
        id="content"
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  )
}

export default AddPost
