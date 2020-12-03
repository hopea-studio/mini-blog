import { Box, Button } from "@material-ui/core"
import React from "react"
import moment from "moment"
import { signOut } from "../firebase"

import { Link } from "react-router-dom"

const UserCard = ({ displayName, photoURL, email, createdAt, children }) => {
  return (
    <Box>
      <div className="CurrentUser--profile">
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <Link to="/profile">
            <h2>{displayName}</h2>
          </Link>
          <p className="email">{email}</p>
          <p className="created-at">
            {moment(createdAt && createdAt.toDate()).calendar()}
          </p>
        </div>
      </div>
      <div>
        <div>{children}</div>
        <Button onClick={signOut}>Sign Out</Button>
      </div>
    </Box>
  )
}

export default UserCard
