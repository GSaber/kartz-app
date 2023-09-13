// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDue6f6mzXGLskek-_5VKI4fQqZmAhSTfs",
  authDomain: "kartz-app.firebaseapp.com",
  projectId: "kartz-app",
  storageBucket: "kartz-app.appspot.com",
  messagingSenderId: "516554914792",
  appId: "1:516554914792:web:aa4155555653483ccac25d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
