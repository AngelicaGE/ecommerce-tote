import React from 'react';
import '../styles/SideNavbar.scss'
import SandwichMenu from '../containers/SandwichMenu';
import { NavLink } from 'react-router-dom'



const SideNavbar = ({clickOnMenu}) => {
  return (
  <div className='SideNavbar'>
        <div className='sandwich-menu-open hide-in-laptop' onClick={clickOnMenu}>
            <SandwichMenu className="SandwichMenu" isSelected={true}/>
            <ul className='tote-pages-side' >
                    <li className='tote-page'>
                        <NavLink to="fghj" className={({isActive}) => (isActive? 'activeClass': '')}>New arrivals</NavLink>
                    </li>
                    <li className='tote-page'>
                        <NavLink to='fgj' className={({isActive}) => (isActive? 'activeClass': '')}>Sale</NavLink>
                    </li>
                    <li className='tote-page favs'>
                        <NavLink to="/favs" className={({isActive}) => isActive? 'activeClass': ''}>
                            My Favorities
                        </NavLink>                    
                    </li>
                    <li className='tote-page'>
                        <NavLink to="/about" className={({isActive}) => isActive? 'activeClass': ''}>
                            About
                        </NavLink>                    
                    </li>
                </ul>
        </div>
        <div className='image-container'>
          <div className='image'></div>
        </div>
  </div>
  );
};

export default SideNavbar;
