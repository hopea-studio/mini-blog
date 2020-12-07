import { Box, Grid } from "@material-ui/core"
import React, { useContext } from "react"
import { userContext } from "../providers/UsersProvider"
import SignIn from "./SignIn"
import SingInAndSignUp from "./SingInAndSignUp"
import UserCard from "./UserCard"

const Authentication = () => {
  const user = useContext(userContext)
  console.log(user)
  return (
    <Box>
      <Grid container>
        <Grid item>{user ? <UserCard {...user} /> : <SignIn />}</Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  )
}

export default Authentication
