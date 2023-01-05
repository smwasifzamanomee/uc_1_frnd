// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOaWk8oAzpDwODGphc-zex_6kBH7PvLyc",
  authDomain: "united-chauffer.firebaseapp.com",
  projectId: "united-chauffer",
  storageBucket: "united-chauffer.appspot.com",
  messagingSenderId: "661655504480",
  appId: "1:661655504480:web:e4e6604e3815f3bc0fe505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;