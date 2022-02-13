import {useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addCartItem = (newCartItem) => {
        /*
        // ESTA VALIDACION ME MARCA ERROR UNDEFINED :( 
        //Validate Item is not duplicated
        if(cartItems.some(({item}) => item.product.id === cartItem.product.id)) return;
        */
        setCartItems(
            [
                ...cartItems, 
                newCartItem
            ]
        );
        alert("Cart updated");

    };

    const removeCartItem = () => {
    };

    const updateCartItem = () => {
    };

    return (
        <CartContext.Provider 
            value={{
                    cartItems,
                    addCartItem,
                    removeCartItem,
                    updateCartItem
                }}>
            {children}
        </CartContext.Provider>
    );
}