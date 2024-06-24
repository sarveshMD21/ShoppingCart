import React, { useState } from 'react'
import Button from './Resusables/Button'
import Caraousel from './Caraousel'
import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../Store/cart-slice'
import { productAction } from '../Store/product-slice'

const ProductCard = ({id,name,label,price,images,cnt}) => {
  const dispatch=useDispatch();

  const getPrice=(price)=>{
      return parseInt(price.substring(2),10);
  }

  const handleIncrement=()=>{
    const product_price=getPrice(price);
    console.log(id);
   const payload={
      id:id,
      name:name,
      image:images[0],
      price:product_price,
      cnt:1
   }
   const product_payload={
      id:id-1,
      cnt:1
   }
    dispatch(cartSliceActions.addToCart(payload));  
    dispatch(productAction.addProductCount(product_payload));
  }

  const handleDecrement=()=>{
    if(cnt!=0){
      const payload={
        id:id
      }
      const product_payload={
        id:id-1,
       
     }
      dispatch(cartSliceActions.removeSingleInstanceFromCart(payload));
      dispatch(productAction.removeProductCount(product_payload));
    }
  }

  return (
    <div className='p-2 flex flex-col'>
        <div className='h-3/4 relative'>
            <Caraousel images={images}/>
        </div>
        <div className='mt-3 pt-1 pb-1'>
            <p className='font-bold text-xl'>{name}</p>
        </div>
        <div className='pt-1 pb-1'>
            <p className='font-light text-slate-500'>{label}</p>
        </div>
        <div className='pt-1 pb-1'>
            <p>{price}</p>
        </div>
        <div className='mt-4 flex flex-row justify-between p-2 bg-slate-200'>
            <div className='justify-start rounded-full bg-white hover:bg-slate-300' onClick={handleIncrement}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

            </div>
            <div>{cnt}</div>
            <div className='justify-end rounded-full bg-white hover:bg-slate-300' onClick={handleDecrement}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>

            </div> 
            {/* <Button label="Add to Cart" /> */}
        </div>
    </div>
  )
}

export default ProductCard