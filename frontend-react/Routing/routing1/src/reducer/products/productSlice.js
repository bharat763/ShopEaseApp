import {createSlice} from "@reduxjs/toolkit"
// import { LoginUser, RegisterUser } from "./AuthAction"
import { getAllProduct, getAllProductCategories } from "./productThunk";
const initialQueryState={
   filters:{
      name:'',
      category:''

   },
   sort:JSON.stringify({createdAt:-1}),
   limit:10,
}
 const productSlice=createSlice({
    name:"product",
    initialState:{
       products:[],
       loading:false,
       error:null,
       category:[],
       query:initialQueryState,
    },
    reducers:{
   setLimit:(state,action)=>{
      // if(!state.query){
      //    state.query={};
      // }
      state.query.limit=action.payload;
   },
     
     setSort:(state,action)=>{
      state.query.sort=action.payload
     },
     setFilters:(state,action)=>{
      state.query.filters={...state.query.filters,...action.payload};
      // state.query.filters=action.payload
     },
     resetQuery:(state)=>{
      state.query=initialQueryState;
       
    },
   
    },
    
    extraReducers:(builder)=>{
      builder
      .addCase(getAllProduct.pending,(state)=>{
         state.loading=true;
         state.error=null;
      })
      .addCase(getAllProduct.fulfilled,(state,action)=>{
         state.products=action.payload
         state.loading=false;
      }).addCase(getAllProduct.rejected,(state,action)=>{
         state.error=action.payload,
         state.loading=false;
      })
      .addCase(getAllProductCategories.pending,(state)=>{
         state.loading=true;
         state.error=null;
      })
      .addCase(getAllProductCategories.fulfilled,(state,action)=>{
         state.category=action.payload;
         state.loading=false;
      }).addCase(getAllProductCategories.rejected,(state,action)=>{
         state.error=action.payload,
         state.loading=false;
      })
      
    },
 });
 export const{setLimit,setSort,setFilters,resetQuery}=productSlice.actions;

 export  default productSlice.reducer 
