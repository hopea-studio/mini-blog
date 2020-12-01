import { Box, Typography } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"
import Authentication from "./Authentication"

const Header = () => {
  return (
    <Box>
      <Link to="/">
        <Typography variant="h1">Blog</Typography>
      </Link>
      <Authentication />
    </Box>
  )
}

export default Header
