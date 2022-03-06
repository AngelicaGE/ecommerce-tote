import React, {useState, useContext} from 'react'
import {Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.scss'
import SandwichMenu from '../containers/SandwichMenu.jsx'
import CarWidget from '../containers/CarWidget'
import searchIcon from '../assets/icons/search-white-24.png'
import searchIconSmall from '../assets/icons/search-white-16.png'
import wishlistIcon from '../assets/icons/heart-empty-white-24.png'
import userIcon from '../assets/icons/user-white-24.png'
import UserModal from '../containers/UserModal'
import { UserContext } from '../context/UserContext';


const Navbar = ({name, clickOnMenu}) => {
    const [modalStyle, setModalStyle] = useState("hide")
    const { user} = useContext(UserContext)
    const [isMouseOnUser, setisMouseOnUser] = useState(false)


     const handleClickUser = (val, msg="") => {
         setisMouseOnUser(val)       
     }

    return (
        <div className='Navbar'>    
                <div className='main-navbar'>
                <div className='sandwich-menu hide-in-laptop' onClick={clickOnMenu}>
                    <SandwichMenu isSelected={false}/>
                </div>
                <ul className='tote-pages' onClick={()=> handleClickUser(false, "ul")}>
                    <li className='tote-page'>
                        <NavLink to="/NewArrivals" className={({isActive}) => (isActive? 'activeClass': '')}>Our Picks</NavLink> |
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

                <div className='logo' onClick={()=> handleClickUser(false, "div")}>
                    <h1><Link to="/" className='logo-link'>{name}</Link> </h1>
                </div>

                <ul className='user-pages'>
                    <li className='user-page search'  onClick={()=> handleClickUser(false, "search")} onMouseEnter={()=> handleClickUser(false, "search")}>
                        <NavLink to="/search">
                            <picture>
                                <source media="(min-width:800px)" srcSet={searchIcon}></source>
                                <img alt='search icon' src={searchIconSmall}/>
                            </picture>
                        </NavLink>
                    </li>
                    <li className='user-page user'>
                        <img  onClick={()=> handleClickUser(!isMouseOnUser, "img")} onMouseEnter={()=> handleClickUser(true, "img")} width="24px" id='user-icon' src={user? user.photoURL :userIcon} alt="user icon" />
                        <UserModal  
                            modalStyle={isMouseOnUser? "show":"hide"}
                            setModalStyle={setModalStyle}
                            user={user}
                           // setUser={setUser}
                            handleClickUser={handleClickUser}
                        ></UserModal>
                    </li>
                    <li className='user-page whishlist'  onClick={()=> handleClickUser(false, "wish")}  onMouseEnter={()=> handleClickUser(false, "wish")} >
                        <NavLink to ="/wishlist" className={({isActive}) => isActive? 'activeClass': ''}>
                            <img alt='wishlist icon' src={wishlistIcon}/>
                        </NavLink>
                    </li>
                    <li className='user-page cart'  onClick={()=> handleClickUser(false, "cart")}>
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