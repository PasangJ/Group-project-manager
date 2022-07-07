import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCGT0J8qsDqTkbYh9CG3aGcSLwp6Kya3wQ",
    authDomain: "monday-clone-7e2b7.firebaseapp.com",
    projectId: "monday-clone-7e2b7",
    storageBucket: "monday-clone-7e2b7.appspot.com",
    messagingSenderId: "654302179786",
    appId: "1:654302179786:web:2f8d12a04ffea6b4159f33"
  }

//initialize firebase
firebase.initializeApp(firebaseConfig)

//inint services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, projectStorage, timestamp}