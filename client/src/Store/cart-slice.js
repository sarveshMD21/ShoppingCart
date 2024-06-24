import {createSlice} from '@reduxjs/toolkit';


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        total_cnt:0,
        total_price:0,
        item_list:[]
    },
    reducers:{
        addToCart(state,action){
            const product=action.payload;
            const exsistingProduct=state.item_list.find((item)=>item.id==product.id);
            if(exsistingProduct){
                exsistingProduct.cnt+=1;
            }
            else{
                state.item_list.push(product);
            }
            state.total_cnt+=1;
            state.total_price+=product.price;
        },
        removeSingleInstanceFromCart(state,action){
            const product=action.payload;
            const exsistingProduct=state.item_list.find((item)=>item.id==product.id);
            if(exsistingProduct){
                exsistingProduct.cnt-=1;
                state.total_cnt-=1;
            state.total_price-=exsistingProduct.price;
                if(exsistingProduct.cnt==0){
                    state.item_list=state.item_list.filter((item)=>item.id!=product.id);
                }
            }
            
        },
        removeAllInstanceFromCart(state,action){
            const product=action.payload;
            const exsistingProduct=state.item_list.find((item)=>item.id==product.id);
            if(exsistingProduct){
            state.total_cnt-=exsistingProduct.cnt;
            state.total_price-=(exsistingProduct.cnt*exsistingProduct.price);}
            state.item_list=state.item_list.filter((item)=>item.id!=product.id);
        }
    }
})


export const cartSliceActions=cartSlice.actions;

export default cartSlice;