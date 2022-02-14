import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {cartItems} = useContext(CartContext)
    console.log("***** CART ITEMS ******")
    console.log(cartItems)
    return (
    <div>
        Info del Cart COntext 
        {
            cartItems.map((cartItem) => ( 
                <div key={cartItem.id}>
                    <p>{cartItem.volumeInfo.title}: {cartItem.id}</p> 
                    <hr />
                </div>
            ))
        }
    </div>
  )
}

export default Cart