import { Grid } from "@material-ui/core"
import React, { useContext } from "react"
import { userContext } from "../providers/UsersProvider"
//import SignIn from "./SignIn"
import SingInAndSignUp from "./SingInAndSignUp"
import UserCard from "./UserCard"

const Authentication = () => {
  const user = useContext(userContext)
  console.log(user)
  return (
    <Grid item md={8}>
      {user ? <UserCard {...user} /> : <SingInAndSignUp />}
    </Grid>
  )
}

export default Authentication
