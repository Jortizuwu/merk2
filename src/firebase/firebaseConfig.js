import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlKD3CBakmqOMLm8A36GI-yVRvwXHu9nY",
  authDomain: "binterest-af341.firebaseapp.com",
  projectId: "binterest-af341",
  storageBucket: "binterest-af341.appspot.com",
  messagingSenderId: "339636752361",
  appId: "1:339636752361:web:6b31b5c4c8b5c2d9ce8578",
};

firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { db, googleAuthProvider, firebase };
