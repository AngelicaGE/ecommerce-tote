import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {cartItems, removeCartItem} = useContext(CartContext)
    console.log("***** CART ITEMS ******")
    console.log(cartItems)

    const handleClickOnRemove = (productId) =>{
        removeCartItem(productId);
    }

    return (
    <div>
        Info del Cart COntext 
        {
            cartItems.map((cartItem) => ( 
                <div key={cartItem.id}>
                    <p>{cartItem.volumeInfo.title}: {cartItem.id}</p> 
                    <button onClick={() => handleClickOnRemove(cartItem.id)} >Remove from cart</button>
                    <hr />
                </div>
            ))
        }
    </div>
  )
}

export default Cart