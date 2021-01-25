import { Box, Grid } from "@material-ui/core"
import React, { useContext } from "react"
import { postsContext } from "../providers/PostsProvider"
import { userContext } from "../providers/UsersProvider"
import AddPost from "./AddPost"
import Post from "./Post"

const Posts = () => {
  const posts = useContext(postsContext)
  const user = useContext(userContext)
  return (
    <Box>
      {user && <AddPost />}
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </Grid>
    </Box>
  )
}

export default Posts
