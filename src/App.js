import { ThemeProvider } from "@material-ui/core"
import React from "react"
import Header from "./components/Header"
import { theme } from "./theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}

export default App
