import React, {useState} from 'react';
import { Link, NavLink } from "react-router-dom";
import '../styles/Product.scss'

const Product = ({hookAPI, id, name, saleability, price, imagePath}) => {
    const [selected, setselected] = useState(false);

    return(
        <div className='ProductItem' onMouseEnter={() => setselected(true)} onMouseLeave={() => setselected(false)}>
                <picture>
                    
                    <img src={imagePath?.thumbnail} alt={'producto ' + name} className={selected? 'selected':''}/>
                </picture>
                <p className='name'>{name}</p>
                {
                    (saleability == "FOR_SALE")
                    ?
                    <p className='price'>${price.amount} {price.currencyCode}</p>
                    : (saleability == "FREE")
                    ?
                    <p className='price'>FREE</p>
                    :
                    <p className='price'>Not for sale</p>
                }             
                <Link to={`/product/${id}`} id="ver-mas" className={selected? 'selected':'unselected'} type='button'>View details</Link>
        </div>
    );
};

export default Product;
