import { Box, Button } from "@material-ui/core"
import React from "react"
import { signInWithGoogle } from "../firebase"

const SignIn = () => {
  return (
    <Box>
      <Button onClick={signInWithGoogle}>Sign In With Google</Button>
    </Box>
  )
}

export default SignIn
