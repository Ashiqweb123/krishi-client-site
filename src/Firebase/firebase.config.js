// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAyH5HTL5tYmcHYrwyKddKIpo10j3-lefU",
  authDomain: "krishilink-simple-project.firebaseapp.com",
  projectId: "krishilink-simple-project",
  storageBucket: "krishilink-simple-project.firebasestorage.app",
  messagingSenderId: "376906195853",
  appId: "1:376906195853:web:d6a735beefb15be03813c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
