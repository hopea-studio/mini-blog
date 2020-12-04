import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Collapse,
  Link,
  Typography,
} from "@material-ui/core"
import React from "react"
import moment from "moment"
import { signOut } from "../firebase"

import { Link as RouterLink } from "react-router-dom"

const UserCard = ({ displayName, photoURL, email, createdAt, children }) => {
  return (
    <Box>
      <Card>
        <CardActionArea>
          {photoURL && <Avatar src={photoURL} alt={displayName} />}
          <Typography>{displayName}</Typography>{" "}
        </CardActionArea>
        <CardContent>
          <Collapse></Collapse>
          <Typography>
            {moment(createdAt && createdAt.toDate()).calendar()}
          </Typography>
          <Typography>{email}</Typography>
          <Button onClick={signOut}>Sign Out</Button>
          <Button>
            <Link component={RouterLink} underline="none" to="/profile">
              Edit profile
            </Link>
          </Button>
        </CardContent>
      </Card>
      <div>
        <div>{children}</div>
      </div>
    </Box>
  )
}

export default UserCard
