
export const cartReducer=(state,{type,payload})=>{

    switch(type) {
        case "ADD_TO_CART" :
            return {
                ...state,
                cart:[...state.cart,{...payload,quantity:1}]
            }
        case "INCREMENT" :
            return {
                ...state,
                cart: state.cart.map(product=>product.id === payload ? {...product,quantity:product.quantity+1 } : product )
                
            }
        
        case "DECREMENT" :
            return {
                ...state,
                cart: state.cart.map(product=>product.id === payload ? {...product,quantity:product.quantity-1} : product )
            }

        default :
           return state
    }
}