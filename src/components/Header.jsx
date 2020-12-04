import { Box, Typography, Link, Grid } from "@material-ui/core"
import React from "react"
import { Link as RouterLink } from "react-router-dom"
import Authentication from "./Authentication"

const Header = () => {
  return (
    <Box>
      <Grid container>
        <Grid item>
          <Link component={RouterLink} underline="none" to="/">
            <Typography underline="none" variant="h5">
              The Secret Cellar
            </Typography>
          </Link>
          <Typography variant="subtitle2">For Yue && his friends </Typography>
          <Typography variant="subtitle2">
            囌悅禾Θ彵菂棚友ィ门菂祕樒洞穴 ⓛⓞⓥⓔ 
          </Typography>
        </Grid>
        <Grid item>
          <Authentication />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header
