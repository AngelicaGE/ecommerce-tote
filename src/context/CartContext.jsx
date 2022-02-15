import {useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addCartItem = (newCartItem) => {
        console.log("*** ADDING ITEM ***")
        console.log(newCartItem)
       if(productIsInCart(newCartItem.id)) {
           alert("duplicate");
           return;
       }
        setCartItems([...cartItems, newCartItem]);
        alert("cart updated")
    };

    const removeCartItem = (cartItemId) => {
        setCartItems(cartItems.filter((item) => item.id != cartItemId))
    };

    const updateCartItem = () => {
    };

    const clearCart = () => {
        console.log("clear");
        setCartItems([]);
    };

    const productIsInCart = (cartItemId) => {
        let isThere = cartItems.some(item => item.id === cartItemId);
        return isThere;
    };

    return (
        <CartContext.Provider 
            value={{
                    cartItems,
                    addCartItem,
                    removeCartItem,
                    updateCartItem,
                    clearCart
                }}>
            {children}
        </CartContext.Provider>
    );
}