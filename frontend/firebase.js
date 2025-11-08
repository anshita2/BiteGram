// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "bitegram-73bc2.firebaseapp.com",
  projectId: "bitegram-73bc2",
  storageBucket: "bitegram-73bc2.firebasestorage.app",
  messagingSenderId: "603991614119",
  appId: "1:603991614119:web:586e2f2fe29fe93e4f7182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}