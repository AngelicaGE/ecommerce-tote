import React from 'react';
import cartIcon from '../assets/icons/bag.png'
import cartIconSmall from '../assets/icons/bag-small.png'

const CarWidget = () => {
  return (
        <picture>
            <source media="(min-width:800px)" srcSet={cartIcon}></source>
            <img alt='cart icon' src={cartIconSmall}/>
        </picture>
    );
};

export default CarWidget;
