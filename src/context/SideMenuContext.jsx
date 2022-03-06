import {createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const key = 'menuOpen';
export const CartContext = createContext();


export const SideMenuContext = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useLocalStorage(key, false);


    const updateMenuState = async (state) => {
        setIsMenuOpen(state);
    };

    return (
        <SideMenuContext.Provider 
            value={{ isMenuOpen}}>
            {children}
        </SideMenuContext.Provider>
    );
}

