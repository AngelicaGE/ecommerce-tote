import {useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartContext, setCartContext] = useState([]);
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}