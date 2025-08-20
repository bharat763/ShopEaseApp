import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import productReducer from "./products/productSlice";
import cartReducer from "./cart/cartSlice";
import authReducer from "./auth/authSlice";
 const rootReducer=combineReducers(
    {
        counter:counterReducer,
        auth:authReducer,
        products:productReducer,
        cart:cartReducer,
    },
)
export default rootReducer;


