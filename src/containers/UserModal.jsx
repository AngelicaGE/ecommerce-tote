import React, {useContext} from 'react'
import '../styles/UserModal.scss'
import { UserContext } from '../context/UserContext'
import { auth, google_provider } from '../firebase/firebase'
import { GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";

const UserModal = ({modalStyle, setModalStyle}) => {
  const {user} = useContext(UserContext)


  const handleCloseModal = (event) => {
    event.stopPropagation();
    console.log("handleCloseModal");
    setModalStyle("hide")
  }
  const handleLogClick = (event) =>{
    event.stopPropagation()
    console.log("log")
  }

  const handleSignIn = () =>{ 
    signInWithPopup(auth, google_provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode+": "+errorMessage)
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
 }

 const handleSignOut =()=> {
    signOut(auth).then(() => {
        console.log("signed out succeeded")
      }).catch((error) => {
        console.log(error)
      });
 }

  return (
    <div onClick={handleCloseModal} className={`UserModal ${modalStyle}`}>
      <div className='user-modal-content' onClick={(event) => event.stopPropagation()}>
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
              user?<p className='log' onClick={handleSignOut}>Sign-out</p>
              :<p className='log' onClick={handleSignIn}>Sign-in</p>
            }
          </li>
      </div>
    </div>
  )
}

export default UserModal