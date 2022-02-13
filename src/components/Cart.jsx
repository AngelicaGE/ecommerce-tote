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
                <>
                    <p>{cartItem.product.volumeInfo.title}: {cartItem.product.id}</p> 

                    <hr />
                </>

            ))
        }
    </div>
  )
}

export default Cart