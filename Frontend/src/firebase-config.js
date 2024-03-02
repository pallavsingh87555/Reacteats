import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvj4euIGnsFzj5ErhMdOijgcGhH8D5BmE",
  authDomain: "reacteats-93cf9.firebaseapp.com",
  projectId: "reacteats-93cf9",
  storageBucket: "reacteats-93cf9.appspot.com",
  messagingSenderId: "649529631281",
  appId: "1:649529631281:web:0fdd16991dc95f5a176b10",
  measurementId: "G-6HSLL6B9L5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);