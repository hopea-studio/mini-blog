import { Box, Button, TextField } from "@material-ui/core"
import React, { useContext, useState } from "react"
import { firestore } from "../firebase"
import { userContext } from "../providers/UsersProvider"

const initialState = {
  title: "",
  content: "",
}

const AddPost = () => {
  const [state, setState] = useState(initialState)
  const user = useContext(userContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { title, content } = state

    const post = {
      title,
      content,
      user,
      stars: 0,
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
    }

    firestore.collection("posts").add(post)

    setState(initialState)
  }

  return (
    <Box border="3px solid black" borderRadius="5px" py={5} my={2}>
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
