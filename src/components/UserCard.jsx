import {
  Avatar,
  Box,
  Button,
  Card,
  Collapse,
  Grid,
  Link,
  Typography,
  IconButton,
} from "@material-ui/core"
import React, { useState } from "react"
import moment from "moment"
import { signOut } from "../firebase"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Link as RouterLink } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import { green } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
  expand: {
    backgroundColor: green[100],
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  card: {
    width: 250,
    padding: 5,
    backgroundColor: green[100],
  },
  iconSection: {
    backgroundColor: green[100],
  },
}))

const UserCard = ({
  displayName,
  photoURL,
  email,
  createdAt,
  lastSignInTime,
}) => {
  const classes = useStyles()

  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.card}>
      <Grid container direction="column">
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justify="space-evenly"
          className={classes.container}
        >
          {photoURL && <Avatar src={photoURL} alt={displayName} />}
          <Typography variant="h6">{displayName}</Typography>
        </Grid>
        <Grid item container justify="center" className={classes.iconSection}>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Grid>
        <Grid item className={classes.iconSection}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography align="center">{email}</Typography>
            <Typography align="center">
              Last login: {lastSignInTime ? lastSignInTime.slice(0, 12) : null}
            </Typography>
            <Typography align="center">
              Registered since:{" "}
              {moment(createdAt && createdAt.toDate()).calendar()}
            </Typography>
            <Box display="flex" justifyContent="space-evenly" py={1}>
              <Button variant="contained" color="secondary">
                <Link component={RouterLink} underline="none" to="/profile">
                  Edit profile
                </Link>
              </Button>
              <Button onClick={signOut} variant="contained" color="secondary">
                Sign Out
              </Button>
            </Box>
          </Collapse>
        </Grid>
      </Grid>
    </Card>
  )
}

export default UserCard
