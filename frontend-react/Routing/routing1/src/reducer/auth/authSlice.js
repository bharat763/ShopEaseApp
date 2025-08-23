import {createSlice} from "@reduxjs/toolkit";
 import { LoginUser, RegisterUser } from "./authAction";
 const authSlice=createSlice({
    name:"auth",
    initialState:{
       user:null,
       loading:false,
       error:null
       
    },
    reducers:{
      //  setUsers:(state,action)=>{
      //   state.user=action.payload
      //  },
       logout:(state)=>{
        state.user=null
        localStorage.removeItem("authToken")
       },
       
    },
    
    extraReducers:(builder)=>{
      builder
      .addCase(LoginUser.pending,(state)=>{
         state.loading=true;
         state.error=null;
      })
      .addCase(LoginUser.fulfilled,(state,action)=>{
         state.user=action.payload
         state.loading=false;
      }).addCase(LoginUser.rejected,(state,action)=>{
         state.error=action.payload,
         state.loading=false;
      })
      .addCase(RegisterUser.pending,(state)=>{
         state.loading=true;
         state.error=null;
      })
      .addCase(RegisterUser.fulfilled,(state,action)=>{
         state.user=action.payload;
         state.loading=false;
      }).addCase(RegisterUser.rejected,(state,action)=>{
         state.error=action.payload,
         state.loading=false;
      });

    },
 }); 
 export const {logout}=authSlice.actions
 export  default authSlice.reducer 
