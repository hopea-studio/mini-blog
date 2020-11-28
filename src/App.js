import React from "react"
import Header from "./components/Header"
import { theme } from "./theme"
import { ThemeProvider } from "@material-ui/core"
import { Switch, Route } from "react-router-dom"
import Posts from "./components/Posts"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/" component={Posts} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
