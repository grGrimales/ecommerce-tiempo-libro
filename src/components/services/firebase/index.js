// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAtH2T1_6Es4Eh7uTdU-uYI8zZcO9-NVs",
  authDomain: "tiempo-libro.firebaseapp.com",
  projectId: "tiempo-libro",
  storageBucket: "tiempo-libro.appspot.com",
  messagingSenderId: "746910363068",
  appId: "1:746910363068:web:21d51d0190a3365e5c4fb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);
