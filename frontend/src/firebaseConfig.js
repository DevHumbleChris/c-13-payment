// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDkgK-w-PCA3ymjniIFbiM_tW1PkNCeM_w",
  authDomain: "c-13-payment.firebaseapp.com",
  projectId: "c-13-payment",
  storageBucket: "c-13-payment.appspot.com",
  messagingSenderId: "434336133243",
  appId: "1:434336133243:web:507e00e42b5a8a3b6472de"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
