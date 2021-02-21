import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkD5Yfv15XMR57KYgb5vjnS41LlugS8n8",
  authDomain: "clone-7d7f6.firebaseapp.com",
  projectId: "clone-7d7f6",
  storageBucket: "clone-7d7f6.appspot.com",
  messagingSenderId: "16269940125",
  appId: "1:16269940125:web:a342079a9df07d41c98b74",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
