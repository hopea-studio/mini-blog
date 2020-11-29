import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import { theme } from "./theme"
import { ThemeProvider } from "@material-ui/core"
import { Switch, Route } from "react-router-dom"
import Posts from "./components/Posts"
import { firestore } from "./firebase"
import { docsWithId } from "./utilities"

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    firestore
      .collection("posts")
      .get()
      .then((data) => {
        const updatedPost = data.docs.map((doc) => docsWithId(doc))
        setPosts(updatedPost)
        console.log(updatedPost)
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
