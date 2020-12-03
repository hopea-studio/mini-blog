import React from "react"
import { withRouter } from "react-router-dom"

const PostPage = ({ match }) => {
  return <div>{match.params.id}</div>
}

export default withRouter(PostPage)
