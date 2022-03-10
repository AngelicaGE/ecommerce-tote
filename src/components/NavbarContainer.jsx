import React, {useEffect, useState, useContext} from 'react'
import Navbar from './Navbar';
import SideNavbar from './SideNavbar';
import { SideMenuContext } from '../context/SideMenuContext'

const NavbarContainer = ({name}) => {
  const {isMenuOpen, updateMenuState} = useContext(SideMenuContext)

    
    const clickOnMenu = () => {
      updateMenuState(!isMenuOpen);
        //console.log("isMenuOpen: " + !isMenuOpen);
    }
  return (
  <div>
      {
        (isMenuOpen == true)
        ? <SideNavbar clickOnMenu={clickOnMenu}></SideNavbar>
        : <Navbar name={name} clickOnMenu={clickOnMenu}></Navbar>
      }
  </div>
  );
};

export default NavbarContainer;
