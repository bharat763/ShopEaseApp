import {createSlice} from "@reduxjs/toolkit"
 const counterSlice=createSlice({
    name:"counter",
    initialState:{
       count:0,
    },
    reducers:{
        incrementCount:(state,action)=>{
         state.count=state.count+1;

        }
    }
 })
 export const {incrementCount}=counterSlice.actions
 export  default counterSlice.reducer