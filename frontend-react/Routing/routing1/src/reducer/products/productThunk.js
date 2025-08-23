import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductCategories, getProducts } from "../../api/products";

const getAllProduct=createAsyncThunk("products/all",async(query,{rejectWithValue})=>{
    try {
       const response= await getProducts(query||{});
       console.log(response.data)
       return response.data;
    } catch (error) {
       return rejectWithValue(error.response?.data)
    }
    })
    const getAllProductCategories=createAsyncThunk("products/categories",async(_,{rejectWithValue})=>{
      try {
         const response= await getProductCategories();
         return response.data;
      } catch (error) {
         return rejectWithValue(error.response?.data)
      }
      })
    export{getAllProduct,getAllProductCategories}