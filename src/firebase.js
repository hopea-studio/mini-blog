import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAkj1fbCn6s0QGY5IVaWdqJ_OG_POoLb58",
  authDomain: "blog-8877.firebaseapp.com",
  databaseURL: "https://blog-8877.firebaseio.com",
  projectId: "blog-8877",
  storageBucket: "blog-8877.appspot.com",
  messagingSenderId: "392305382704",
  appId: "1:392305382704:web:8448e01cdfc17d01bae4f5",
  measurementId: "G-T7WS3V9LSJ",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
//firebase.analytics()

export const firestore = firebase.firestore()

firestore.settings({ timestampsInSnapshots: true })

window.firebase = firebase

export default firebase
