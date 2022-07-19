// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb7aEkiNBMKzsp7Zj45C_zeOMAdmblPz4",
  authDomain: "movie-app-f944a.firebaseapp.com",
  projectId: "movie-app-f944a",
  storageBucket: "movie-app-f944a.appspot.com",
  messagingSenderId: "515808304075",
  appId: "1:515808304075:web:8b9161773999d48ca1b44e",
  measurementId: "G-4FZ6E32S0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;