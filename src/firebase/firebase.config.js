// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzS2MlUWH10NAs8Pe1MVd6Mv1Ar1ivrG8",
  authDomain: "the-news-dragon-dccd6.firebaseapp.com",
  projectId: "the-news-dragon-dccd6",
  storageBucket: "the-news-dragon-dccd6.appspot.com",
  messagingSenderId: "450177206093",
  appId: "1:450177206093:web:80d7dcb6d9abd763305904"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;