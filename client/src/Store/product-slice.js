import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:"product",
    initialState:{
        product_count:[],
    },
    reducers:{
        addProductCount(state,action){
            const product=action.payload;
            const exsistingproduct=state.product_count.find((item)=>item.id==product.id);
            if(exsistingproduct){
                exsistingproduct.cnt+=1;
            }
            else{
                state.product_count.push(product);
            }
        },
        removeProductCount(state,action){
            const product=action.payload;
            const exsistingproduct=state.product_count.find((item)=>item.id==product.id);
            if(exsistingproduct){
                exsistingproduct.cnt-=1;
                if(exsistingproduct.cnt==0){
                    state.product_count=state.product_count.filter((item)=>item.id!=product.id);}
            }

        },
        removeProduct(state,action){
            const product=action.payload;
            const exsistingproduct=state.product_count.find((item)=>item.id==product.id);
            if(exsistingproduct){
                state.product_count=state.product_count.filter((item)=>item.id!=product.id);
            }
        }

    }   
})


export const productAction=productSlice.actions;

export default productSlice