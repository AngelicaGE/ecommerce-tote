import React from 'react';
import '../styles/SideNavbar.scss'
import SandwichMenu from '../containers/SandwichMenu';


const SideNavbar = ({clickOnMenu}) => {
  return (
  <div className='SideNavbar'>
        <div className='sandwich-menu hide-in-laptop' onClick={clickOnMenu}>
            <SandwichMenu isSelected={true}/>
        </div>
  </div>
  );
};

export default SideNavbar;
