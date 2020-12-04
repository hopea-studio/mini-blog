const functions = require("firebase-functions")
const admin = require("firebase-admin")

admin.initializeApp(functions.config().firebase)

const firestore = admin.firestore()
firestore.settings({ timestampsInSnapshots: true })

exports.incrementCommentCount = functions.firestore
  .document("posts/{postId}/comments/{commentId}")
  .onCreate(async (snapshot, context) => {
    const { postId } = context.params
    const postRef = firestore.doc(`posts/${postId}`)

    const snap = await postRef.get("comments")
    const comments = snap.get("comments")

    return postRef.update({ comments: comments + 1 })
  })
