import React, {useState, useEffect} from 'react'
import {Link, NavLink } from 'react-router-dom'
// con navlink podemos usar estilos customisados
import '../styles/Navbar.scss'
import SandwichMenu from '../containers/SandwichMenu.jsx'
import CarWidget from '../containers/CarWidget'
import searchIcon from '../assets/icons/search-white-24.png'
import searchIconSmall from '../assets/icons/search-white-16.png'
import wishlistIcon from '../assets/icons/heart-empty-white-24.png'
import wishlistSelectedIcon from '../assets/icons/heart-empty-white-24.png'
import { auth, google_provider } from '../firebase/firebase'
import { GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";


const Navbar = ({name, clickOnMenu}) => {

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
        <div className='Navbar'>    
                <div className='main-navbar'>
                <div className='sandwich-menu hide-in-laptop' onClick={clickOnMenu}>
                    <SandwichMenu isSelected={false}/>
                </div>
                <ul className='tote-pages' >
                    <li className='tote-page'>
                        <NavLink to="/NewArrivals" className={({isActive}) => (isActive? 'activeClass': '')}>New arrivals</NavLink>
                    </li>
                    <li className='tote-page'>
                        <NavLink to='/free' className={({isActive}) => (isActive? 'activeClass': '')}>Free</NavLink>
                    </li>
                    <li className='tote-page'>
                        <NavLink to="/about" className={({isActive}) => isActive? 'activeClass': ''}>
                            About
                        </NavLink>                    
                    </li>
                </ul>

                <div className='logo'>
                    <h1><Link to="/" className='logo-link'>{name}</Link> </h1>
                </div>

                <ul className='user-pages' >
                    <li className='user-page search'>
                        <NavLink to="/search">
                            <picture>
                                <source media="(min-width:800px)" srcSet={searchIcon}></source>
                                <img alt='search icon' src={searchIconSmall}/>
                            </picture>
                        </NavLink>
                    </li>
                    <li className='user-page whishlist'>
                        <NavLink to ="/wishlist">
                            <img alt='wishlist icon' src={wishlistIcon}/>
                        </NavLink>
                    </li>
                    <li className='user-page cart'>
                        <NavLink to="/cart">
                            <CarWidget></CarWidget>
                        </NavLink>
                    </li>
                    {
                    //<li className='user-page user'>
                      //  <button onClick={handleSignIn}>Sign-in</button>
                        //<button onClick={handleSignOut}>Sign-out</button>
                    //</li>
                    }
                </ul>
                </div>
        </div>
    );
}

export default Navbar;