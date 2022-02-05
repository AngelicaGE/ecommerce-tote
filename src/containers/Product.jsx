import React from 'react';
import '../styles/Product.scss'

const Product = ({name, price, imagePath, hookAPI}) => {
    return(
        <div className='ProductItem'>
                <picture>
                    <img src={imagePath} alt={'producto ' + name} />
                </picture>
                <p className='name'>{name}</p>
                {
                    hookAPI?
                    <div className='colors-container'>
                        <div className='color1'></div>
                        <div className='color2'></div>
                        <div className='color3'></div>
                    </div>
                    : ''
                }
                <p className='price'>${price}</p>
                <button className='ver-mas'>Ver Más</button>
        </div>
    );
};

export default Product;
