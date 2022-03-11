import React, {useContext, useEffect, useState} from 'react'
import '../styles/UserModal.scss'
import { auth, google_provider } from '../firebase/firebase'
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";


const UserModal = ({modalStyle, setModalStyle, user, handleClickUser}) => {

  useEffect(() => {
    //console.log(user)
    const onScroll = () =>  handleClickUser(false, "scroll");
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [user])
  

  const handleCloseModal = (event) => {
    event.stopPropagation();
    //console.log("handleCloseModal");
    setModalStyle("hide")
  }
  const handleLogClick = (event) =>{
    event.stopPropagation()
    //console.log("log")
  }

  const handleSignIn = () =>{ 
    signInWithPopup(auth, google_provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      //console.log(user)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      //console.log(errorCode+": "+errorMessage)
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
 }

 //go back to home because it doesnt re render page after sign out
 let navigate = useNavigate();
 const handleSignOut =()=> {
    signOut(auth).then(() => {
        //console.log("signed out succeeded")
      }).catch((error) => {
        console.log(error)
      }).finally ( () =>{
        navigate("/");
        setModalStyle("hide")
      });

 }

  return (
    <div onClick={handleCloseModal} className={`UserModal ${modalStyle}`} >
      <div className='user-modal-content' onClick={(event) => event.stopPropagation()} onMouseEnter={()=> handleClickUser(true, "modal")} onMouseLeave={() => handleClickUser(false, "modal")}> 
        <p><strong>My Account</strong></p>
        {
          user?
          <div className='user-info'>
            <p className='welcome-message'>Welcome {user.displayName}!</p>
            <img src={user.photoURL} alt="user profile pgoto"></img>
            <p className='user-email'>{user.email}</p>
          </div>
          : <p className='welcome-message'>Create an account to have a better experience :)</p>
        }
        <hr />
          <li className='user-page user'>
            {
              auth.currentUser?<p className='log' onClick={handleSignOut}>Sign-out</p>
              :<p className='log' onClick={handleSignIn}>Sign-in</p>
            }
          </li>
      </div>
    </div>
  )
}

export default UserModal