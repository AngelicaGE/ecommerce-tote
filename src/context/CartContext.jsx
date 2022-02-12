import {useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addCartItem = (cartItem) => {
        /*
        // ESTA VALIDACION ME ESTA MARCANDO UN ERROR DE COMPILACION :( 
        //Validate Item is not duplicated
        if(cartItems.some(({item}) => {item.id === cartItem.product.id})){
            return;
        }
        */

        setCartItems(
            [
                ...cartItems, 
                cartItem
            ]
        )
        console.log("***** CART ITEMS ******")
        console.log(cartItems)
    
/*
        //Validate Item is not duplicated
        if(cartItems.some(({item}) => {item.id === cartItem.product.id})){
            return;
        }
*/
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