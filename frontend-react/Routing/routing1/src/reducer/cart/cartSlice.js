import { createSlice } from "@reduxjs/toolkit";


 const cartSlice=createSlice({
    name:"cart",
    initialState:{
        products:[],
        totalAmount:0,
    },
    reducers:{
        addToCart:(state,action)=>{
            const product=action.payload;
            const existingProduct=state.products.find((item)=>item._id===product._id)
            if(existingProduct){
                existingProduct.quantity+=1;
            }else{
                state.products.push({...product,quantity:1})
            }
            state.totalAmount+=product.price
        },

increaseQuantity:(state,action)=>{
const productId=action.payload;
const existingProduct=state.products.find((item)=>item._id===productId)
if(existingProduct&&existingProduct.quantity<5){
    existingProduct.quantity+=1;
    state.totalAmount+=existingProduct.price;
}
},
decreaseQuantity:(state,action )=>{
    const productId=action.payload;
const existingProduct=state.products.find((item)=>item._id===productId)
if(existingProduct&&existingProduct.quantity>1){
    existingProduct.quantity-=1;
    state.totalAmount-=existingProduct.price;

}
},

        removeProductFromCart:(state,action)=>{
            const productId=action.payload;
            const productToRemove=state.products.find((item)=>item._id===productId)
            if(productToRemove){
                state.totalAmount-=productToRemove.price*productToRemove.quantity;
                state.products=state.products.filter((item)=>item._id!==productId)
            }
            // if(state.products.length===0){
            //     state.totalAmount=0;
            // }

        }
    },
 });
 export const{addToCart,removeProductFromCart,increaseQuantity,decreaseQuantity}=cartSlice.actions;
 export default cartSlice.reducer;