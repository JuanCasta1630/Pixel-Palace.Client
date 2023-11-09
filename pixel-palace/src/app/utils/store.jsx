import { useReducer, createContext } from "react";

export const Store = createContext()

//el estado inicial de nuestra aplicación o variable  de estado

const initialState = {
    cart:{
        cartItems:[]
    }
}

//función reductora donde crea la logica funcional
function reducer (state, action){

    switch (action.type) {
        case "CARD_ADD_ITEM":{
            const newItem = action.payload
            const existItem = state.cart.carItems.find(item => item.slug === newItem.slug)
        
            //una condición para actualizar si existe el item o guardar si no existe
            const cartItems = existItem ? state.cart.cartItems.map(item => item.name === existItem.name ? newItem: item)

            //de lo contrario, si no existe guardamos el primer item seleccionado
            : [...state.cart.carItems, newItem]

            return {...state, cart:{...state.cart, cartItems}}
        }
    
        default:
            return state;
    }

}

//función para crear el store y envolver a los comp children

export function StoreProvider ({children}){
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    return <Store.Provider value={value}>{children}</Store.Provider>
}