import {createContext, useReducer} from "react";
import {Reducer} from './Reducer'

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: ''
}

export function ContextProvider({children}) {
    const [state, dispatch] = useReducer(Reducer, initialState);

    state.handleCloseAlert = () => {
        dispatch({type: 'HANDLE_CLOSE_ALERT'})
    }

    state.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }

    state.decrementQuantity = (itemId) => {
        dispatch({type: 'DECREMENT_QUANTITY', payload: {id: itemId}})
    }

    state.incrementQuantity = (itemId) => {
        dispatch({type: 'INCREMENT_QUANTITY', payload: {id: itemId}})
    }

    state.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: {item}})
    }

    state.handleBasketShow = () => {
        dispatch({type: 'HANDLE_BASKET_SHOW'})
    }

    const value = {
        state,
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
}