import React, {useState} from 'react';
import { Link } from "react-router-dom";
import '../styles/Product.scss'
import { useNavigate } from "react-router-dom";

const Product = ({ id, name, saleability, price, imagePath, freeLink, displayButton=true}) => {
    const [selected, setselected] = useState(false);

    let navigate = useNavigate();
    const navToDetails = ()=>{
        if(saleability !== "FREE"){
            navigate(`/product/${id}`);
        }
    }

    return(
        <div className=' ProductItem' onMouseEnter={() => setselected(true)} onMouseLeave={() => setselected(false)} onClick={()=>navToDetails()}>
                <img src={imagePath?.thumbnail} alt={'producto ' + name} className={selected? 'selected':''}/>
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
                {
                 (saleability == "FREE" && freeLink && displayButton)?
                 <a href={freeLink} target="_blank"id="ver-mas" className={`view-details-btn ${selected? 'selected':'unselected'}`} type='button'>Get book</a>
                 :(displayButton)?<Link to={`/product/${id}`} id="ver-mas" className={`view-details-btn ${selected? 'selected':'unselected'}`} type='button'>View details</Link>
                :''
                }             
        </div>
    );
};

export default Product;
