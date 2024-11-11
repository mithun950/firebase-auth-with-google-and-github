// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnrBlLYAmHuy9BNVa2L-ssKMFYluk4qyk",
  authDomain: "simple-project-for-me-457d0.firebaseapp.com",
  projectId: "simple-project-for-me-457d0",
  storageBucket: "simple-project-for-me-457d0.firebasestorage.app",
  messagingSenderId: "748893286904",
  appId: "1:748893286904:web:641530509f589f665ae60d",
  measurementId: "G-FVZJSD0350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;