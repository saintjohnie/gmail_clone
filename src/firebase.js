import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDTqpWc4D8Fvk6aYVXuiVGwBqrmqBS5LZ8",
  authDomain: "clone-2cc7f.firebaseapp.com",
  projectId: "clone-2cc7f",
  storageBucket: "clone-2cc7f.appspot.com",
  messagingSenderId: "50996850991",
  appId: "1:50996850991:web:add30330a3da324fa431da",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const Provider=new firebase.auth.GoogleAuthProvider()
export { db, auth, storage, Provider };
