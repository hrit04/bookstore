
import { createContext,useContext,useReducer } from "react";
import { cartReducer } from "../reducer/cart-reducer";
const initialValue= {
    cart:[]

}
const cartContext= createContext(initialValue);

const CartProvider =({children}) => {

    const [{cart},cartDispatch] = useReducer(cartReducer,initialValue);

    return (
    <cartContext.Provider value={{cart,cartDispatch}}>
        {children}
    </cartContext.Provider>
    )
}

const useCart=()=> useContext(cartContext);

export {useCart, CartProvider}