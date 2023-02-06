// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8BHlKgTFkVzYyPAYhDNwr7mUkyyFVthA",
  authDomain: "midjourney-clone.firebaseapp.com",
  projectId: "midjourney-clone",
  storageBucket: "midjourney-clone.appspot.com",
  messagingSenderId: "924140982231",
  appId: "1:924140982231:web:c4186beac511c74f8d0592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider}
