import React from "react"
import Header from "./components/Header"
import { theme } from "./theme"
import { ThemeProvider } from "@material-ui/core"
import { Switch, Route } from "react-router-dom"
import Posts from "./components/Posts"
import UserProfile from "./components/UserProfile"
import PostPage from "./components/PostPage"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/posts/:id" component={PostPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
