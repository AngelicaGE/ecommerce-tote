import React, {useState} from 'react';
import { Link, NavLink } from "react-router-dom";
import '../styles/Product.scss'

const Product = ({ id, name, price, imagePath}) => {
    const [selected, setselected] = useState(false);
    return(
        <div className='ProductItem' onMouseEnter={() => setselected(true)} onMouseLeave={() => setselected(false)}>
                <picture>
                    <img src={imagePath} alt={'producto ' + name} className={selected? 'selected':''}/>
                </picture>
                <p className='name'>{name}</p>
                <p className='price'>${price} MXN</p>
                <Link to={`/product/${id}`} id="ver-mas" className={selected? 'selected':'unselected'} type='button'>View details</Link>
        </div>
    );
};

export default Product;
