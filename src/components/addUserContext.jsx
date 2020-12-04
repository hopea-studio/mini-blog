import React, { useContext } from "react"
import { userContext } from "../providers/UsersProvider"

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component"
}

const addUserContext = (Component) => {
  const WrappedComponent = (props) => {
    const user = useContext(userContext)
    return <Component user={user} {...props} />
  }
  WrappedComponent.displayName = `WithUser(${getDisplayName(WrappedComponent)})`

  return WrappedComponent
}

export default addUserContext
