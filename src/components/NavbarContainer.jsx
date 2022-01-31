import {useState} from 'react';
import Navbar from './Navbar';
import SideNavbar from './SideNavbar';

const NavbarContainer = ({name}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const clickOnMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("isMenuOpen: " + isMenuOpen);
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
