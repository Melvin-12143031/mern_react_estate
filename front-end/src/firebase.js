// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-6f2b8.firebaseapp.com",
  projectId: "react-6f2b8",
  storageBucket: "react-6f2b8.firebasestorage.app",
  messagingSenderId: "187871128541",
  appId: "1:187871128541:web:f65d491549f12493346434"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
