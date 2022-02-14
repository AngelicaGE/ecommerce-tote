import React from 'react';
import cartIcon from '../assets/icons/bag-white-24.png'
import cartIconSmall from '../assets/icons/bag-white-16.png'

const CarWidget = () => {
  return (
        <picture>
            <source media="(min-width:800px)" srcSet={cartIcon}></source>
            <img alt='cart icon' src={cartIconSmall}/>
        </picture>
    );
};

export default CarWidget;
