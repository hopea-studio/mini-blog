import { Box, Button, Grid, TextField, Typography } from "@material-ui/core"
import React, { useState } from "react"
import { auth, signInWithGoogle } from "../firebase"
import { makeStyles } from "@material-ui/core/styles"
import google from "../images/btn_google_dark_normal_ios.svg"

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
    <Grid item container spacing={2} md={6}>
      <Grid item container xs={6} justify="center">
        <Grid item>
          <TextField
            variant="outlined"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            type="password"
            name="password"
            placeholder="password"
            value={state.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={handleSubmit}
            variant="contained"
            className={classes.button}
          >
            Sign In
          </Button>
        </Grid>
      </Grid>
      <Grid item container xs={6} alignItems="center">
        <Button
          onClick={signInWithGoogle}
          variant="contained"
          className={classes.button}
        >
          Sign in with <img src={google} alt="google" />
        </Button>
      </Grid>
    </Grid>
  )
}

export default SignIn
