import React from 'react'
import '../styles/Navbar.scss'
import SandwichMenu from '../containers/SandwichMenu.jsx'

import searchIcon from '../assets/icons/search.png'
import searchIconSmall from '../assets/icons/search-small.png'
import userIcon from '../assets/icons/user.png'
import wishlistIcon from '../assets/icons/heart.png'
import wishlistSelectedIcon from '../assets/icons/heart-fill.png'
import CarWidget from '../containers/CarWidget'

const Navbar = ({name, clickOnMenu}) => {


    return (
        <div className='Navbar'>    
                <div className='main-navbar'>
                <div className='sandwich-menu hide-in-laptop' onClick={clickOnMenu}>
                    <SandwichMenu isSelected={false}/>
                </div>
                <ul className='tote-pages' >
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
                    <h1>{name}</h1>
                </div>

                <ul className='user-pages' >
                    <li className='user-page search'>
                        <picture>
                            <source media="(min-width:800px)" srcSet={searchIcon}></source>
                            <img alt='search icon' src={searchIconSmall}/>
                        </picture>
                    </li>
                    <li className='user-page user'>
                        <img alt='user icon' src={userIcon}/>
                    </li>
                    <li className='user-page whishlist'>
                        <img alt='wishlist icon' src={wishlistIcon}/>
                    </li>
                    <li className='user-page cart'>
                        <CarWidget></CarWidget>
                    </li>
                </ul>
                </div>
        </div>
    );
}

export default Navbar;