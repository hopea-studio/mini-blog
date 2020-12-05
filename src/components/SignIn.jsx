import { Box, Button, TextField } from "@material-ui/core"
import React, { useState } from "react"
import { auth, signInWithGoogle } from "../firebase"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.warning.main,
  },
}))

const initialState = { email: "", password: "" }

const SignIn = () => {
  const classes = useStyles()
  const [state, setState] = useState(initialState)

  const handleChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    auth
      .signInWithEmailAndPassword(state.email, state.password)
      .catch((error) => console.error(error))

    setState(initialState)
  }
  return (
    <Box>
      <TextField
        name="email"
        placeholder="Email"
        value={state.email}
        onChange={handleChange}
      />
      <TextField
        type="password"
        name="password"
        placeholder="password"
        value={state.password}
        onChange={handleChange}
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        className={classes.button}
      >
        Sign In
      </Button>
      <Button onClick={signInWithGoogle}>Sign In With Google</Button>
    </Box>
  )
}

export default SignIn
