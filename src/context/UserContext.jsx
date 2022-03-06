//using multiple contexts https://stackoverflow.com/questions/53346462/react-multiple-contexts
import {createContext, useEffect } from "react";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {db} from '../firebase/firebase.js'
import {collection, query, setDoc, doc, where, addDoc, deleteDoc, getDocs} from "firebase/firestore"
import {auth} from '../firebase/firebase.js'

export const UserContext = createContext();
const likesCollection ="likes";
const cartCollection ="cart";

export const UserProvider = ({children}) => {
    const [cartItemsAmount, setCartItemsAmount] = useState(0)
    const [userId, setUserId] = useState(null)
    const [user, setUser] = useState(null)

    //its a promise
    const getAllForUser = async (collectionName, useruid) => {
        let tmpArray = [];
        const itemCollection = collection(db, collectionName);
        const q = query(itemCollection,where("useruid", "==",useruid))
        console.log("getAllForUser");
        let res = await getDocs(q);
        if(res){
            res.docs.map(doc => (
                tmpArray = [...tmpArray, {"id": doc.id, ...doc.data()}]
            ))
        }
        return tmpArray;
    }

    const getCartItemsAmount = async (useruid) =>{
        const itemCollection = collection(db, cartCollection);
        const q = query(itemCollection,where("useruid", "==",useruid))
        let res = await getDocs(q);
        console.log(res.size, " items in user's cart")
        setCartItemsAmount(res.size)
        return res.size;
    }

    //its a promise
    const addtoUserFavs = async (productInfo, useruid) => {
        console.log("*** ADDING LIKED ***")
        const likeInfo ={productInfo, useruid}
        const docRef = await addDoc(collection(db, likesCollection), likeInfo);
        console.log("Add book to user favs: " + docRef.id)
    };

    //its a promise
    const removeUserFavsFromDetails = async (bookId, useruid) => {
        console.log("*** REMOVING LIKED ***")
        let itemCollection = collection(db, likesCollection);
        let q = query(itemCollection,where("useruid", "==", useruid))
        let res = await getDocs(q)
        let docId = 0;
        // search for this book entry id in loked collection
        res.docs.forEach(doc => {
            if(doc.data().productInfo.id ===bookId) {
                console.log("book is liked")
                console.log(doc.id)
                docId=doc.id;
            }
        })
        // if it was found, delete it from collection
        if(docId !== 0){
            res = await deleteDoc(doc(db, likesCollection, docId));
        }
        return res;
    };

    const isInUserFavs = async (bookId, useruid) => {
            let itemCollection = collection(db, likesCollection);
            let q = query(itemCollection,where("useruid", "==", useruid))
            let res = await getDocs(q)
            let isLiked = false;
            res.docs.forEach(doc => {
                if(doc.data().productInfo.id ===bookId) {
                    console.log("book is liked")
                    isLiked = true;
                }
            })
            return isLiked;
    };

    const isInUserCart = async (itemId, useruid) => {
        let itemCollection = collection(db, cartCollection);
        let q = query(itemCollection,where("useruid", "==", useruid))
        let res = await getDocs(q)
        let isLiked = false;
        res.docs.forEach(doc => {
            if(doc.data().item.id ===itemId) {
                console.log("book is in cart", doc.data().item)
                isLiked = true;
            }
        })
        return isLiked;
};

    const addToUserCart = async (item, useruid)=>{
        console.log("*** PUSH TO FIREBASE ***")
        const cartItem ={item, useruid}
        const docRef = await addDoc(collection(db, cartCollection), cartItem);
        console.log("Add item to user cart: " + docRef.id)
        getCartItemsAmount(useruid)
    }

    const removeFromUserCart = async (itemId, useruid) => {
        console.log("*** REMOVING FROM CART ***")
        let itemCollection = collection(db, cartCollection);
        let q = query(itemCollection,where("useruid", "==", useruid))
        let res = await getDocs(q)
        let docId = 0;
        // search for this book entry id in loked collection
        res.docs.forEach(doc => {
            if(doc.data().item.id === itemId) {
                docId=doc.id;
            }
        })
        // if it was found, delete it from collection
        if(docId !== 0){
            res = await deleteDoc(doc(db, cartCollection, docId));
        }
        getCartItemsAmount(useruid)
        return res;
    };

    // update the amount of books order of a specific title
    const updateItemFromcart = async (itemUpdated, userId) => {
        await setDoc(doc(db, cartCollection, itemUpdated.id), {item: itemUpdated.item, useruid:userId});
    }

    const clearUserCart = async (userId) => {
        const itemCollection = collection(db, cartCollection);
        const q = query(itemCollection,where("useruid", "==",userId))
        let res = await getDocs(q);
        res.docs.map(docRef => (
             deleteDoc(docRef.ref)
        ))  
        getCartItemsAmount(userId);
    }

    useEffect(() => {
        onAuthStateChanged(auth,  (userAuth) => {
            console.log("USE EFFECT CAR WIDGET")
            if(userAuth){
                setUserId(userAuth.uid)
                setUser(userAuth)
                console.log(userAuth)
                getCartItemsAmount(userAuth.uid)
            }else{
                setUserId(null)
                setUser(null)
            }
          })
    }, [])
    


    return (
        <UserContext.Provider 
            value={{
                getAllForUser,
                isInUserFavs,
                addtoUserFavs,
                removeUserFavsFromDetails,
                addToUserCart,
                isInUserCart,
                removeFromUserCart,
                updateItemFromcart,
                clearUserCart,
                cartItemsAmount,
                userId,
                user
                }}>
            {children}
        </UserContext.Provider>
    );
}