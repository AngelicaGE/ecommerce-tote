import React, {useState, useEffect} from 'react'
import {Link, NavLink } from 'react-router-dom'
// con navlink podemos usar estilos customisados
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
                        <NavLink to="fghj" className={({isActive}) => (isActive? 'activeClass': '')}>New arrivals</NavLink>
                    </li>
                    <li className='tote-page'>
                        <a href='#'>Sale</a>
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