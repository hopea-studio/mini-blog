import { Button, Grid, TextField } from "@material-ui/core"
import React, { useState } from "react"
import { auth, createUserProfileDocument } from "../firebase"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.warning.main,
  },
}))

const initialState = {
  displayName: "",
  email: "",
  password: "",
}

const SignUp = () => {
  const classes = useStyles()
  const [state, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { email, password, displayName } = state

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      createUserProfileDocument(user, { displayName })
    } catch (error) {
      console.error(error)
    }

    setState(initialState)
  }

  return (
    <Grid item md={6}>
      <form onSubmit={handleSubmit}>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="displayName"
              variant="outlined"
              placeholder="Display Name"
              value={state.displayName}
              onChange={handleChange}
            />
            <TextField
              name="email"
              variant="outlined"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
            />
            <TextField
              name="password"
              variant="outlined"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item container xs={6} alignItems="center">
            <Button
              fullWidth
              variant="contained"
              className={classes.button}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  )
}

export default SignUp
