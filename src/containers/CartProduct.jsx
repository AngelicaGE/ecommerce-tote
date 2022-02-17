import React, {useState} from 'react'
import '../styles/CartProduct.scss'
import ItemCount from './ProductCount'

const CartProduct = ({cartProduct, handleClickOnRemove}) => {
    const [amount, setAmount] = useState(cartProduct.amount)

    const onAdd = () => {
        console.log("one more...");
        setAmount(amount +1);

    }
    const onRemove = () =>{
        console.log("one less...")
        setAmount(amount -1);
    }

  return (
    <div className='CartProduct'>
        <div className='details-cont cont'>
            <p className='title'>{cartProduct.title}</p> 
           {/*<p className="subtitle">{cartProduct.subtitle}</p>*/}
            <p id='price-without-total' className='price'>${cartProduct.price} <strong>x</strong> {amount}</p>
            <p id='price-with-total' className='price'>${cartProduct.price} <strong>x</strong> {amount} = ${cartProduct.price * amount}{cartProduct.currency}</p>

        </div>
        <div className='counter-cont cont'>
            <ItemCount className="ItemCount"
                amount={amount}
                stock={cartProduct.stock}
                onAdd={onAdd}
                onRemove={onRemove}
            ></ItemCount>
            <p>{cartProduct.stock} in stock</p>

        </div>
        <div  id="total-cont" className='total-cont cont'>
            <p> ${amount * cartProduct.price}{cartProduct.currency}</p>
        </div>
        <div className='delete-cont cont'>
            <button id="remove-btn-txt" className='remmove-btn' onClick={() => handleClickOnRemove(cartProduct.id)}>Remove</button>
            <button id="remove-btn-x" className='remmove-btn' onClick={() => handleClickOnRemove(cartProduct.id)}>X</button>

        </div>
        <div className='last'>
            <hr />
        </div>
    </div>
  )
}

export default CartProduct