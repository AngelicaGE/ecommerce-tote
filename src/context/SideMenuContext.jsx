import {createContext, useState } from "react";

export const SideMenuContext = createContext();


export const SideMenuProvider = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const updateMenuState = async (state) => {
        setIsMenuOpen(state);
    };

    return (
        <SideMenuContext.Provider 
            value={{ isMenuOpen, updateMenuState}}>
            {children}
        </SideMenuContext.Provider>
    );
}

