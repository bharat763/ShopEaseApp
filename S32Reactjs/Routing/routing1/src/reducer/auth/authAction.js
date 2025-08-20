import { createAsyncThunk} from "@reduxjs/toolkit";
import { login, register } from "../../api/auth";

 const LoginUser=createAsyncThunk("auth/login",async(data,{rejectWithValue})=>{
   try{
      const response=await login(data)
     localStorage.setItem("authToken",response.data?.token)
      return response.data;
   }catch(error){
      return rejectWithValue(error.response?.data)
   };
   
  
 })
 const RegisterUser=createAsyncThunk("auth/register",async(data,{rejectWithValue})=>{
   try{
      const response=await register(data)
      return response.data;
   }catch(error){
      return rejectWithValue(error.response?.data)
   };
   
  
 })
 export{LoginUser,RegisterUser}



