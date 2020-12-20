import React from "react"
import Header from "./components/Header"
import { theme } from "./theme"
import { Box, ThemeProvider } from "@material-ui/core"
import { Switch, Route } from "react-router-dom"
import Posts from "./components/Posts"
import UserProfile from "./components/UserProfile"
import PostPage from "./components/PostPage"
import styledApp from "./styles/App.module.css"
import Footer from "./components/Footer"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box px={2} className={styledApp.app}>
        <Box maxWidth="500px" flexGrow="1">
          <Header />
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/posts/:id" component={PostPage} />
          </Switch>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
