//using multiple contexts https://stackoverflow.com/questions/53346462/react-multiple-contexts
import { useState } from "react";

export const UserContext = createContext();

export const CartProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        console.log(user)
    }, [user])
    

    return (
        <CartContext.Provider 
            value={{

                }}>
            {children}
        </CartContext.Provider>
    );
}