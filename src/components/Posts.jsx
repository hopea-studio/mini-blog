import { Box } from "@material-ui/core"
import React from "react"
import AddPost from "./AddPost"
import Post from "./Post"

const Posts = ({ posts }) => {
  return (
    <Box>
      <AddPost />
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Box>
  )
}

export default Posts
