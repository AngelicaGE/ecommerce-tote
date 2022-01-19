import React from 'react'
import '../styles/Navbar.scss'
import searchIcon from '../assets/icons/search.png'
import userIcon from '../assets/icons/user.png'
import wishlistIcon from '../assets/icons/heart.png'
import wishlistSelectedIcon from '../assets/icons/heart-fill.png'
import cartIcon from '../assets/icons/bag.png'


const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='main-navbar'>
                <ul className='tote-pages'>
                    <li className='tote-page'>
                        <a href='#'>Shop</a>
                    </li>
                    <li className='tote-page'>
                        <a href='#'>New arrivals</a>
                    </li>
                    <li className='tote-page'>
                        <a href='#'>Sale</a>
                    </li>
                    <li className='tote-page'>
                        <a href='#'>About</a>
                    </li>
                </ul>
                <div className='logo'>
                    <h1>TOTE-ME</h1>
                </div>
                <ul className='user-pages'>
                    <li className='user-page'>
                        <img alt='search icon' src={searchIcon}/>
                    </li>
                    <li className='user-page'>
                        <img alt='user icon' src={userIcon}/>
                    </li>
                    <li className='user-page'>
                        <img alt='wishlist icon' src={wishlistIcon}/>
                    </li>
                    <li className='user-page'>
                        <img alt='cart icon' src={cartIcon}/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;