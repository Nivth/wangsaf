import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD098ZbR_sDAijKL3qRmLf561GRtmZTcow",
  authDomain: "wangsaf-c4cbb.firebaseapp.com",
  projectId: "wangsaf-c4cbb",
  storageBucket: "wangsaf-c4cbb.appspot.com",
  messagingSenderId: "664664708376",
  appId: "1:664664708376:web:8cb2c8c7e2f74a0053ba6d",
  measurementId: "G-TL85S8KGMM",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
