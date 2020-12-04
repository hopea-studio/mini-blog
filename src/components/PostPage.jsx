import { Box } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
import { firestore } from "../firebase"
import { docsWithId } from "../utilities"
import addUserContext from "./addUserContext"
import Comments from "./Comments"
import Post from "./Post"

const PostPage = ({ match, user }) => {
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])

  const postId = match.params.id
  const postRef = firestore.doc(`posts/${postId}`)
  const commentsRef = postRef.collection("comments")

  useEffect(() => {
    const unsubscribeFromPost = postRef.onSnapshot((snapshot) => {
      const post = docsWithId(snapshot)
      setPost(post)
    })

    return () => unsubscribeFromPost()
  }, [])

  useEffect(() => {
    const unsubscribeFromComments = commentsRef.onSnapshot((snapshot) => {
      const comments = snapshot.docs.map(docsWithId)
      setComments(comments)
    })

    return () => unsubscribeFromComments()
  }, [])

  const addComment = (comment) => {
    commentsRef.add({
      ...comment,
      user,
    })
  }

  return (
    <Box>
      {post && <Post {...post} />}
      <Comments comments={comments} onCreate={addComment} />
    </Box>
  )
}

export default withRouter(addUserContext(PostPage))
