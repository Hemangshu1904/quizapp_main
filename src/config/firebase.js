// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfc8Kdm9lSuaROEb0VVv1i_HCqJXOukaI",
  authDomain: "quiz-app-86df6.firebaseapp.com",
  projectId: "quiz-app-86df6",
  storageBucket: "quiz-app-86df6.appspot.com",
  messagingSenderId: "496911873192",
  appId: "1:496911873192:web:8776cedb555a1a37043e9d"
};
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);