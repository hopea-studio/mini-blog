import { Box, Typography, Link } from "@material-ui/core"
import React from "react"
import { Link as RouterLink } from "react-router-dom"
import Authentication from "./Authentication"

const Header = () => {
  return (
    <Box>
      <Link component={RouterLink} underline="none" to="/">
        <Typography underline="none" variant="h5">
          The Secret Cellar for Yue
        </Typography>
      </Link>
      <Typography>&& his friends </Typography>
      <Typography variant="subtitle2">
        囌悅禾Θ彵菂棚友ィ门菂祕樒洞穴 ⓛⓞⓥⓔ 
      </Typography>

      <Authentication />
    </Box>
  )
}

export default Header
