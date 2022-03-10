import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";



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

export const db = getFirestore();
export const google_provider = new GoogleAuthProvider();
export const auth = getAuth();
