import { Typography, Link, Grid, IconButton } from "@material-ui/core"
import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Link as RouterLink } from "react-router-dom"
import GitHubIcon from "@material-ui/icons/GitHub"

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.common.white,
  },
  footer: {
    padding: 30,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Grid container alignItems="center" className={classes.footer}>
      <Grid item md={4}>
        <Link component={RouterLink} underline="none" to="/">
          <Typography className={classes.text} underline="none" variant="h4">
            The Secret Cellar
          </Typography>
        </Link>
      </Grid>
      <Grid item md={4} container justify="center">
        <Typography
          className={classes.text}
          component={Link}
          href="https://github.com/yue-su"
          target="_blank"
        >
          Made By Yue
        </Typography>
      </Grid>
      <Grid item md={4} container justify="center">
        <Link href="https://github.com/hopea-studio/mini-blog" target="_blank">
          <IconButton>
            <GitHubIcon className={classes.text} />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Footer
