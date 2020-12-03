import { Box, Button, TextField } from "@material-ui/core"
import React, { useState } from "react"
import { auth, firestore } from "../firebase"

const UserProfile = () => {
  const [displayName, setDisplayName] = useState("")
  //let imageInput = null

  const uid = auth.currentUser.uid
  const userRef = firestore.collection("users").doc(uid)
  //const file = imageInput && imageInput.files[0]

  const handleChange = (e) => {
    const { value } = e.target
    setDisplayName(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (displayName) {
      userRef.update({ displayName: displayName })
    }
  }

  return (
    <Box>
      <TextField
        name="displayName"
        value={displayName}
        placeholder="Display Name"
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  )
}

export default UserProfile
