import Navbar from './Navbar';
import SideNavbar from './SideNavbar';
import useLocalStorage from "../hooks/useLocalStorage";

const NavbarContainer = ({name}) => {
    const [isMenuOpen, setIsMenuOpen] = useLocalStorage("menuOpen", false);
    
    const clickOnMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("isMenuOpen: " + !isMenuOpen);
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
