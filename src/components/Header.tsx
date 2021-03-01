import { Box, Typography, Link, Grid } from "@material-ui/core"
import React from "react"
import { Link as RouterLink } from "react-router-dom"
import Authentication from "./Authentication"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.text.primary,
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <Box py={2} my={2}>
      <Grid container spacing={2} justify="space-between" alignItems="center">
        <Grid item md={4}>
          <Link component={RouterLink} underline="none" to="/">
            <Typography variant="h4" className={classes.text} component="p">
              The Secret Cellar
            </Typography>
          </Link>
          <Typography variant="subtitle1" className={classes.text}>
            For Yue && his friends{" "}
          </Typography>
          <Typography variant="subtitle2" className={classes.text}>
            囌悅禾Θ彵菂棚友ィ门菂祕樒洞穴 ⓛⓞⓥⓔ 
          </Typography>
        </Grid>

        <Authentication />
      </Grid>
    </Box>
  )
}

export default Header
