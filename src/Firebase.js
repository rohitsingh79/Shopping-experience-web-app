// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzipEIUWYrkGG97mYkGXYivoIw4KWQVtI",
  authDomain: "cart-5b6fe.firebaseapp.com",
  databaseURL: "https://cart-5b6fe.firebaseio.com",
  projectId: "cart-5b6fe",
  storageBucket: "cart-5b6fe.appspot.com",
  messagingSenderId: "598268174435",
  appId: "1:598268174435:web:0baa0e9cbdd57037449856",
  measurementId: "G-E308QNNV4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
