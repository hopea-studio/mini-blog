import { Box, Typography } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Box>
      <Link to="/">
        <Typography variant="h1">Blog</Typography>
      </Link>
    </Box>
  )
}

export default Header
