import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import { theme } from "./theme"
import { ThemeProvider } from "@material-ui/core"
import { Switch } from "react-router-dom"
import Posts from "./components/Posts"
import { firestore } from "./firebase"
import { docsWithId } from "./utilities"

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    firestore.collection("posts").onSnapshot((snapShot) => {
      const post = snapShot.docs.map(docsWithId)
      setPosts(post)
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Posts posts={posts} />
      <Switch></Switch>
    </ThemeProvider>
  )
}

export default App
