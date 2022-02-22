import React, { useReducer, useContext, createContext } from 'react'
import { contextReducer } from "./contextReducer"

const initialState = []

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    // Action Creators

    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id})
        
  

    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction})

    const value = { deleteTransaction, addTransaction }

    return (
        <ExpenseTrackerContext.Provider value={ value }>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

export const useTracker = () => {
    return useContext(ExpenseTrackerContext)
}