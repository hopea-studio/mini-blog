import { Box, Button, TextField, Typography } from "@material-ui/core"
import React, { useState } from "react"
import { auth, createUserProfileDocument } from "../firebase"

const initialState = {
  displayName: "",
  email: "",
  password: "",
}

const SignUp = () => {
  const [state, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const { displayName, email, password } = state

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        createUserProfileDocument(user, { displayName })
      })
      .catch((error) => console.error(error))

    setState(initialState)
  }
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Typography>Sign Up</Typography>
        <TextField
          name="displayName"
          placeholder="Display Name"
          value={state.displayName}
          onChange={handleChange}
        />
        <TextField
          name="email"
          placeholder="email"
          value={state.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          placeholder="password"
          value={state.password}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </Box>
  )
}

export default SignUp
