// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQA3m5uHp4sSpAlcj3jvYZ8wudq-U2s2o",
  authDomain: "peentrest.firebaseapp.com",
  projectId: "peentrest",
  storageBucket: "peentrest.appspot.com",
  messagingSenderId: "56484283520",
  appId: "1:56484283520:web:193ab2a2ff47ab9eea9265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app)