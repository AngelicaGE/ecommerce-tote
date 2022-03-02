import React, {useState, useContext} from 'react'
import {Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.scss'
import SandwichMenu from '../containers/SandwichMenu.jsx'
import CarWidget from '../containers/CarWidget'
import searchIcon from '../assets/icons/search-white-24.png'
import searchIconSmall from '../assets/icons/search-white-16.png'
import wishlistIcon from '../assets/icons/heart-empty-white-24.png'
import wishlistSelectedIcon from '../assets/icons/heart-empty-white-24.png'
import userIcon from '../assets/icons/user-white-24.png'
import UserModal from '../containers/UserModal'
import { UserContext } from '../context/UserContext'

const Navbar = ({name, clickOnMenu}) => {
    const [modalStyle, setModalStyle] = useState("hide")
    const [user, setUser] = useState(null)

     const handleClickUser = () => {
         if(modalStyle == "show"){
            setModalStyle("hide")
         }else{
            setModalStyle("show")
         }

     }

    return (
        <div className='Navbar'>    
                <div className='main-navbar'>
                <div className='sandwich-menu hide-in-laptop' onClick={clickOnMenu}>
                    <SandwichMenu isSelected={false}/>
                </div>
                <ul className='tote-pages' >
                    <li className='tote-page'>
                        <NavLink to="/NewArrivals" className={({isActive}) => (isActive? 'activeClass': '')}>New arrivals</NavLink> |
                    </li>
                    <li className='tote-page'>
                        <NavLink to='/free' className={({isActive}) => (isActive? 'activeClass': '')}>Free</NavLink> |
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
                    <li className='user-page user'>
                        <img onClick={handleClickUser} width="24px" id='user-icon' src={user? user.photoURL :userIcon} alt="user icon" />
                        <UserModal
                            modalStyle={modalStyle}
                            setModalStyle={setModalStyle}
                            user={user}
                            setUser={setUser}
                        ></UserModal>
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
                </ul>
                </div>
        </div>
    );
}

export default Navbar;