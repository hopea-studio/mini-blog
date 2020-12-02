import { Box } from "@material-ui/core"
import React, { useContext } from "react"
import { postsContext } from "../providers/PostsProvider"
import AddPost from "./AddPost"
import Post from "./Post"

const Posts = () => {
  const posts = useContext(postsContext)

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
