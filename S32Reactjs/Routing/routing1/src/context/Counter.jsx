import { createContext, useReducer } from "react";

    export const countContext=createContext();
    export const ContextProvider=({children})=>{
        const reducer=(state,action)=>{
         if(action.type=="Inc"){
            return state+1
         }
         if(action.type=="Dec"){
            return state-1
         }
        }
        const[count,dispatch]=useReducer(reducer,0)
        return <countContext.Provider value={{count,dispatch}}>{children}</countContext.Provider>
    }