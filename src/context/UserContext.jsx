//using multiple contexts https://stackoverflow.com/questions/53346462/react-multiple-contexts
import {createContext, useEffect } from "react";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {db, auth} from '../firebase/firebase.js'
import {collection, query, orderBy, doc, where, addDoc, deleteDoc, getDocs, getFirestore} from "firebase/firestore"

export const UserContext = createContext();
const likesDocument ="likes";

export const UserProvider = ({children}) => {
   
    const getAllForUser = (collectionName, useruid, setStateMethod) => {
        let tmpArray = [];
        const itemCollection = collection(db, collectionName);
        const q = query(itemCollection,where("useruid", "==",useruid))
        console.log("getAllForUser")
        getDocs(q).then((snapshot) => {
            console.log("then")
          console.log(snapshot.docs)
            snapshot.docs.map(doc => {
              tmpArray = [...tmpArray, {"id": doc.id, ...doc.data()}];
            })
            console.log(tmpArray)
        }).catch((e)=>{
            console.log("error")
            console.log(e)
        }).finally(()=>{
            setStateMethod(tmpArray);
        })
    }

    const addtoUserFavs = async (productInfo, useruid, setIsLiked) => {
        console.log("*** ADDING LIKED ***")
        const likeInfo ={productInfo, useruid}
        const docRef = await addDoc(collection(db, likesDocument), likeInfo);
        console.log("Add book to user favs: " + docRef.id)
        setIsLiked(true)
    };

    const removeUserFavsFromDetails = async (bookId, useruid, setIsLiked) => {
        console.log("*** REMOVING LIKED ***")
        let itemCollection = collection(db, likesDocument);
        let q = query(itemCollection,where("useruid", "==", useruid))
        let res = await getDocs(q)
        let docId = 0;
        res.docs.map(doc => {
            if(doc.data().productInfo.id ===bookId) {
                console.log("book is liked")
                console.log(doc.id)
                docId=doc.id;
                //console.log(doc.data())
            }
        })
        if(docId !== 0){
         await deleteDoc(doc(db, likesDocument, docId));
         isInUserFavs(bookId, setIsLiked)
        }
    };

    const isInUserFavs = async (bookId, useruid, setIsLiked) => {
            let itemCollection = collection(db, likesDocument);
            let q = query(itemCollection,where("useruid", "==", useruid))
            let res = await getDocs(q)
            let isLiked = false;
            res.docs.map(doc => {
                if(doc.data().productInfo.id ===bookId) {
                    console.log("book is liked")
                    isLiked = true;
                }
            })
            setIsLiked(isLiked);
    };




    /*onAuthStateChanged(auth, async (userAuth) => {
    
        if (userAuth) {
            //if(userAuth == user.user) return;
          // User is signed in, see docs for a list of available properties: https://firebase.google.com/docs/reference/js/firebase.User

/*            //likes
            let likesArray = [];
            let itemCollection = collection(db, "likes");
            let q = query(itemCollection,where("useruid", "==", user.uid))
            let res = await getDocs(q)
            console.log("then")
            res.docs.map(doc => {
                likesArray = [...likesArray, {"id": doc.id, ...doc.data()}];
            })
            console.log(likesArray)


        //cart
        let cartArray = [];
        itemCollection = collection(db, "cart");
        q = query(itemCollection,where("useruid", "==", user.uid))
        getDocs(q).then((snapshot) => {
            console.log("then")
            snapshot.docs.map(doc => {
                cartArray = [...cartArray, {"id": doc.id, ...doc.data()}];
            })
        }).catch((e)=>{
            console.log("error")
            console.log(e)
        }).finally(()=>{
            //console.log("getAllCart")
          console.log(cartArray)
        })


          //setUser([user, likesArray, cartArray])
          // clear likes[] and cart[] so if there is something saved on localStorage it doesnt get printed
          //localStorage.clear()
          let newUser={
              user: user,
              likes: likesArray
              //cart: cartArray
          }
          console.log(newUser)
          if(user.likes !== newUser.likes){
            console.log("its dif")
            console.log(user)
            console.log(newUser)
            
          }else{
            console.log("its same")

          } 
          setUser(userAuth)
        } else {
          console.log("no user is logged")
          setUser(userAuth);
        }
      });*/

    return (
        <UserContext.Provider 
            value={{
                getAllForUser,
                isInUserFavs,
                addtoUserFavs,
                removeUserFavsFromDetails
                }}>
            {children}
        </UserContext.Provider>
    );
}