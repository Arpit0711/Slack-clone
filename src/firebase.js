import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk16zc6R9x9dBL3t_AUBKHdORcSoJENi8",
  authDomain: "slack-clone-d890a.firebaseapp.com",
  projectId: "slack-clone-d890a",
  storageBucket: "slack-clone-d890a.appspot.com",
  messagingSenderId: "86351681879",
  appId: "1:86351681879:web:43d79903d01d8d55e3c612",
  measurementId: "G-DNL59KG8YG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
