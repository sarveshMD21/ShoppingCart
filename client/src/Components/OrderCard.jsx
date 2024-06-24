import React from 'react'
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../Store/cart-slice';
import { productAction } from '../Store/product-slice';

const OrderCard = ({imageURL,name,price,cnt,id}) => {

  const dispatch=useDispatch();
  
  

  const handleIncrement=()=>{
    const product_price=price;
    console.log(product_price);
   const payload={
      id:id,
      name:name,
      image:imageURL,
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
        id:id-1
      }
      dispatch(cartSliceActions.removeSingleInstanceFromCart(payload));
      dispatch(productAction.removeProductCount(product_payload));
    }
  }

  const handleRemove=()=>{
    const payload={
      id:id
    }
    const product_payload={
      id:id-1
    }
    dispatch(cartSliceActions.removeAllInstanceFromCart(payload));
    dispatch(productAction.removeProduct(product_payload));
  }

  return (
    <div className='flex mt-2 mb-2 flex-row justify-between bg-slate-100 '>
        <div className='p-2 w-1/4'>
            <img src={imageURL} className='w-30 h-40'/>
        </div>
        <div className='flex flex-col w-1/4 '>
            <div className='h-1/3 flex items-end font-bold text-lg'>
                <p>{name}</p>
            </div>
            <div className='h-1/3'>
            <p>₹ {price}</p>
            </div>
            <div className='h-1/3'>
            <div className='mt-4 flex flex-row justify-between p-2  bg-slate-200'>
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
        </div>
        <div className='w-1/4 flex justify-center items-end'>
        <div className='text-red-600 hover:-translate-y-2' onClick={handleRemove}>
            <button>Remove</button>
        </div>
        </div>
    </div>
  )
}

export default OrderCard