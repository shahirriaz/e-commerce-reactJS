import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdg_weMc6h-lPqk8TrR9UAaaSj2KXheS8",
  authDomain: "fir-c708e.firebaseapp.com",
  projectId: "fir-c708e",
  storageBucket: "fir-c708e.appspot.com",
  messagingSenderId: "417996394796",
  appId: "1:417996394796:web:a47954cb3700eb579f1c89",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
