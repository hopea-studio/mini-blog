import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import UsersProvider from "./providers/UsersProvider"
import PostsProvider from "./providers/PostsProvider"

ReactDOM.render(
  <React.StrictMode>
    <UsersProvider>
      <PostsProvider>
        <Router>
          <App />
        </Router>
      </PostsProvider>
    </UsersProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
