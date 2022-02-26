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



/*    signInWithPopup(auth, google_provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
*/