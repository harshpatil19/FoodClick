import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action)=>{
    switch(action.type){
        case "ADD" :
            return[...state,{id: action.id, name:action.name, qty: action.qty, size: action.size, price: action.price, img: action.img}]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index,1)
            return newArr;
            default:
                console.log("Error in Reducer")
    }

}

export const CartProvider =({children}) =>{
    const[state,dispatch] = useReducer(reducer, [])
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>

    )
}
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);