import { Button, Grid, TextField } from "@material-ui/core"
import React, { useContext, useState } from "react"
import { firestore } from "../firebase"
import { userContext } from "../providers/UsersProvider"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    border: "3px solid black",
    borderRadius: "5px",
    padding: 10,
    marginBottom: 20,
    marginTop: 10,
  },
}))

const initialState = {
  title: "",
  content: "",
}

const AddPost = () => {
  const classes = useStyles()
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
    <Grid
      md={10}
      xs={12}
      item
      container
      spacing={3}
      className={classes.container}
    >
      <Grid item xs={5}>
        <TextField
          fullWidth
          name="title"
          placeholder="Title"
          value={state.title}
          id="title"
          onChange={handleChange}
        />{" "}
      </Grid>
      <Grid item xs={5}>
        <TextField
          fullWidth
          name="content"
          placeholder="Content"
          value={state.content}
          id="content"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Add Notes!
        </Button>
      </Grid>
    </Grid>
  )
}

export default AddPost
