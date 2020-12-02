import React, { useState, useEffect, createContext } from "react"
import { auth } from "../firebase"

export const userContext = createContext({ user: null })

const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user))
  }, [])

  return <userContext.Provider value={user}>{children}</userContext.Provider>
}

export default UsersProvider
