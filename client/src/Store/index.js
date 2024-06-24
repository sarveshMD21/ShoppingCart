import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import alertSlice from "./alert-slice";
import cartSlice from "./cart-slice";
import productSlice from "./product-slice";

const store=configureStore({
    reducer:{
        auth: authSlice.reducer,
        alert: alertSlice.reducer,
        cart: cartSlice.reducer,
        product: productSlice.reducer,
    },
});

export default store;