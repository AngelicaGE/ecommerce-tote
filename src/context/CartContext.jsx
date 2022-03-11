import {createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const key = 'cart';
export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useLocalStorage(key, []);

    useEffect(() => {
        //console.log(cartItems)
    }, [cartItems])
    

    const addCartItem = async (newCartItem) => {
        //console.log("*** ADDING ITEM ***")
       if(productIsInCart(newCartItem.id)) {
           alert("duplicate");
           return;
       }
        setCartItems([...cartItems, newCartItem]);
    };

    const removeCartItem = (cartItemId) => {
        setCartItems(cartItems.filter((item) => item.id !== cartItemId))
    };

    const updateCartItem = (cartItemId, newAmount) => {
        //console.log("updateCartItem")
        // grab specific item
        let item = cartItems.find((prod) => prod.id === cartItemId)
        function  search(el){
            return el.id === cartItemId;
            }
        let itemIndex= cartItems.findIndex(search);
        if(item){
            item.amount = newAmount;
            // not sure how to update so workaround with temp copy of array
            let cartItempsTemp = cartItems;
            cartItempsTemp[itemIndex] = item;
            //console.log(cartItempsTemp)
            // update actual state
            setCartItems(cartItempsTemp);
        }else{
            //console.log("not found: " + cartItemId)
        }
    };

    const clearCart = () => {
        //console.log("clear");
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
                    clearCart,
                    productIsInCart,
                    setCartItems
                }}>
            {children}
        </CartContext.Provider>
    );
}