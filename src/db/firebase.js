
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCVKRLvKIGwPdip2Or7GFl4wxxzJ_xsGmM",
  authDomain: "course-register.firebaseapp.com",
  databaseURL: "https://course-register.firebaseio.com",
  projectId: "course-register",
  storageBucket: "course-register.appspot.com",
  messagingSenderId: "167582628206"
}
firebase.initializeApp(config)
const db = firebase.firestore()

export default db