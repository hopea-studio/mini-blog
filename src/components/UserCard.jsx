import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
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

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
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
    <Box>
      <Card>
        <Grid container direction="column">
          <Grid item container direction="column" alignItems="center">
            {photoURL && (
              <Avatar src={photoURL} alt={displayName} sizes="large" />
            )}
            <Typography>{displayName}</Typography>
          </Grid>
          <Grid item container justify="center">
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
          <Grid item>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Typography>
                {moment(createdAt && createdAt.toDate()).calendar()}
              </Typography>
              <Typography>{lastSignInTime}</Typography>
              <Typography>{email}</Typography>
              <Button variant="contained" color="secondary">
                <Link component={RouterLink} underline="none" to="/profile">
                  Edit profile
                </Link>
              </Button>
              <Button onClick={signOut} variant="contained" color="secondary">
                Sign Out
              </Button>
            </Collapse>
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

export default UserCard
