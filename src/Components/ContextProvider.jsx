import React, { createContext,useContext,useReducer } from 'react'



export const Context = createContext()
const ContextProvider = ({children,reducer,initState}) => {
    
   
    return (
        <Context.Provider value={useReducer(reducer,initState)}>
            {children}
        </Context.Provider>
    )
}
export const useStateValue = () => useContext(Context)
export default ContextProvider
