//using multiple contexts https://stackoverflow.com/questions/53346462/react-multiple-contexts
import {createContext, useEffect } from "react";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState();
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log("user logged: " + uid)
        } else {
          console.log("no user is logged")
        }
        setUser(user);
      });

    return (
        <UserContext.Provider 
            value={{
                user
                }}>
            {children}
        </UserContext.Provider>
    );
}