import { Box, Button, TextField } from "@material-ui/core"
import React, { useState } from "react"
import { auth, firestore, storage } from "../firebase"

const UserProfile = () => {
  const [displayName, setDisplayName] = useState("")
  const fileRef = React.useRef(null)

  const uid = auth.currentUser.uid
  const userRef = firestore.collection("users").doc(uid)

  const handleChange = (e) => {
    const { value } = e.target
    setDisplayName(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const file = fileRef && fileRef.current.files[0]

    if (displayName) {
      userRef.update({ displayName: displayName })
    }

    if (file) {
      storage
        .ref()
        .child("user-profiles")
        .child(uid)
        .child(file.name)
        .put(file)
        .then((res) => res.ref.getDownloadURL())
        .then((photoURL) => userRef.update({ photoURL }))
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
      <input type="file" ref={fileRef} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  )
}

export default UserProfile
