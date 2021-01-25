import { Grid } from "@material-ui/core"
import React from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

const SingInAndSignUp = () => {
  return (
    <Grid container spacing={1}>
      <SignIn />
      <SignUp />
    </Grid>
  )
}

export default SingInAndSignUp
