import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State, 
const initialState = {
    transactions: []
}
//dummy transaction data, place into initial state
/* {id: 1, text: "Bouquet", amount: -20},
        {id: 2, text: "Da Money", amount: 300},
        {id: 3, text: "Books", amount: -10},
        {id: 4, text: "Phone", amount: 150}
 */
//Create context, init with dummy values above
export const GlobalContext = createContext(initialState);

//Provider component
//Contains Reducer hook
//Context Provider has as value an object which takes
//state(initialState) from reducer and takes transactions from it. 
//GlobalProvider is a function that takes as arg {children} which
//are basically the tags which our provider will be wrapped around
//
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const maxValue = 10000;

    //Actions  
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        maxValue
    }}>
        {children}
    </GlobalContext.Provider>
    );
}