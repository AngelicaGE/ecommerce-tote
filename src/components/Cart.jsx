import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {cartItems, removeCartItem, clearCart} = useContext(CartContext)
    console.log("***** CART ITEMS ******")
    console.log(cartItems)

    const handleClickOnRemove = (productId) =>{
        removeCartItem(productId);
    }

    const handleClickClear = () => {
        console.log("click clear")
        clearCart()
    }

    return (
    <div className='Cart '>
        <div className='cart-products'>
        {
            cartItems.map((cartItem) => ( 
                <div key={cartItem.id}>
                    <p>{cartItem.volumeInfo.title}: {cartItem.id}</p> 
                    <p>Amount {cartItem.amount}</p>
                    <button onClick={() => handleClickOnRemove(cartItem.id)} >Remove from cart</button>
                    <hr />
                </div>
            ))
        }
        </div>
        <div>
            <button onClick={() => handleClickClear()}> Clear cart </button>
        </div>
    </div>
  )
}

export default Cart