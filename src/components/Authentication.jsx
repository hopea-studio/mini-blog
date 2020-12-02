import { Box } from "@material-ui/core"
import React, { useContext } from "react"
import { userContext } from "../providers/UsersProvider"
import SignIn from "./SignIn"
import SingInAndSignUp from "./SingInAndSignUp"
import UserCard from "./UserCard"

const Authentication = () => {
  const user = useContext(userContext)
  return <Box>{user ? <UserCard {...user} /> : <SingInAndSignUp />}</Box>
}

export default Authentication
