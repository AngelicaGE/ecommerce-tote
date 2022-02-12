import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const cartContextInfo = useContext(CartContext)
  return (
    <div>
        Info del Cart COntext {cartContextInfo}
    </div>
  )
}

export default Cart