import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {cartItems} = useContext(CartContext)

    return (
    <div>
        Info del Cart COntext {cartItems}
    </div>
  )
}

export default Cart