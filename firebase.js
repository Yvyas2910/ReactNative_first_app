// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr6vbq5pjixggwcVle5pePeoKelg4LWp0",
  authDomain: "realtechnitex-app.firebaseapp.com",
  projectId: "realtechnitex-app",
  storageBucket: "realtechnitex-app.appspot.com",
  messagingSenderId: "74990174694",
  appId: "1:74990174694:web:4cfac72ffaa4659e605627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

const db = getFirestore();

export {auth, db}