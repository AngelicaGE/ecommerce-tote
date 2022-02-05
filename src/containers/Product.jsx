import React, {useState} from 'react';
import { Link, NavLink } from "react-router-dom";
import '../styles/Product.scss'

const Product = ({id, name, price, imagePath, hookAPI}) => {
    const [selected, setselected] = useState(false);


    return(
        <div className='ProductItem' onMouseEnter={() => setselected(true)} onMouseLeave={() => setselected(false)}>
                <picture>
                    <img src={imagePath} alt={'producto ' + name} className={selected? 'selected':''}/>
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
                <Link to={`/product/${id}`} id="ver-mas" className={selected? 'selected':'unselected'} type='button'>Ver Más</Link>
        </div>
    );
};

export default Product;
