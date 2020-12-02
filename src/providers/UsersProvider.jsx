import React, { useState, useEffect, createContext } from "react"
import { auth, createUserProfileDocument } from "../firebase"

export const userContext = createContext()

const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        createUserProfileDocument(userAuth).then((userRef) => {
          userRef.onSnapshot((snapshot) => {
            setUser({ uid: snapshot.id, ...snapshot.data() })
          })
        })
      }
      setUser(userAuth)
    })
  }, [])

  return <userContext.Provider value={user}>{children}</userContext.Provider>
}

export default UsersProvider
