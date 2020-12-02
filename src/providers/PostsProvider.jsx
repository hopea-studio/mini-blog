import React, { useState, useEffect, createContext } from "react"
import { firestore } from "../firebase"
import { docsWithId } from "../utilities"

export const postsContext = createContext()

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    firestore.collection("posts").onSnapshot((snapShot) => {
      const post = snapShot.docs.map(docsWithId)
      setPosts(post)
    })
  }, [])

  return <postsContext.Provider value={posts}>{children}</postsContext.Provider>
}

export default PostsProvider
