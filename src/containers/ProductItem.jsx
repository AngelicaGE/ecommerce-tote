import React from 'react';
import '../styles/ProductItem.scss'

const ProductItem = ({name, price, imagePath}) => {
    return(
        <div className='ProductItem'>
                <picture>
                    <img src={imagePath} alt={'producto ' + name} />
                </picture>
                <p className='name'>{name}</p>
                <div className='colors-container'>
                    <div className='color1'></div>
                    <div className='color2'></div>
                    <div className='color3'></div>
                 </div>
                <p className='price'>${price}</p>
        </div>
    );
};

export default ProductItem;
