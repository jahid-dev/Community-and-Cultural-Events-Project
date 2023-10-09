// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCi3Jtw1nlhNEHTsc8pbYFayOsf1FQXTRM",
  authDomain: "cultural-vibrance-website.firebaseapp.com",
  projectId: "cultural-vibrance-website",
  storageBucket: "cultural-vibrance-website.appspot.com",
  messagingSenderId: "46674241170",
  appId: "1:46674241170:web:88477efbd0dd59580f684b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;