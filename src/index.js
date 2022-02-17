import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmIIkmCWOP34NtMHhMvRAxtgMj3rCJl-E",
  authDomain: "ecommerce-tote.firebaseapp.com",
  projectId: "ecommerce-tote",
  storageBucket: "ecommerce-tote.appspot.com",
  messagingSenderId: "670946517018",
  appId: "1:670946517018:web:003d93158246d09e7371a3"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



