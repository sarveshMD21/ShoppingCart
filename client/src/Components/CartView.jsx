import React from 'react'
import Navbar from './Navbar'
import Button from './Resusables/Button'
import { lotion1 } from '../assets/images'
import OrderList from './OrderList'
import { useSelector } from 'react-redux'

const CartView = ({hide}) => {

   const totalPrice=useSelector((state)=>state.cart.total_price);

  return (
    <div className=' h-screen flex flex-col'>
        <div>
            <Navbar hide={hide}/>
        </div>
        <div className='h-full flex justify-center align-middle lg:pl-16 lg:pr-16' >
            <div className=' h-full w-full lg:p-10 sm:p-5 flex lg:flex-row flex-col ' >
                <div className='p-2 lg:h-full lg:w-3/4 w-full flex flex-col '>
                <div>
                <p className='text-xl font-bold border-b-2 border-black mb-5'>Order Summary</p>
                </div>
                <div>
                <OrderList/>
                </div>
                </div>
              
              {/* <div className='p-2  w-full lg:h-full lg:w-3/4'>
              <div className='flex flex-col border-2 border-slate-400 rounded-md bg-slate-300'>
                
                    <div className='flex flex-row justify-between rounded-t-md bg-black p-2'>
                        <div className='text-xl text-white'>Name</div>
                        <div className='text-xl text-white'>Quantity</div>
                    </div>
                    <div className='flex flex-row justify-between rounded-t-md p-2'>
                        <div className='text-lg '>Niacinamide body lotion</div>
                        <div className='text-lg'>1</div>
                    </div>
                    <div className='flex flex-row justify-between rounded-t-md p-2'>
                        <div className='text-lg '>Niacinamide body lotion</div>
                        <div className='text-lg'>1</div>
                    </div>
                    <div className='flex flex-row justify-between rounded-t-md p-2'>
                        <div className='text-lg '>Niacinamide body lotion</div>
                        <div className='text-lg'>1</div>
                    </div>
                    <div className='flex flex-row justify-between rounded-t-md p-2'>
                        <div className='text-lg '>Niacinamide body lotion</div>
                        <div className='text-lg'>1</div>
                    </div>
                    <div className='flex flex-row justify-between rounded-t-md p-2'>
                        <div className='text-lg '>Niacinamide body lotion</div>
                        <div className='text-lg'>1</div>
                    </div>
                    <div className='flex flex-row justify-between rounded-t-md p-2'>
                        <div className='text-lg '>Niacinamide body lotion</div>
                        <div className='text-lg'>1</div>
                    </div>
                    <div className='flex flex-row justify-between rounded-t-md p-2'>
                        <div className='text-lg '>Niacinamide body lotion</div>
                        <div className='text-lg'>1</div>
                    </div>
              </div>
              </div> */}
              <div className=' pl-1 pt-3 pr-1 justify-center '>
              <div className='flex flex-col  border-2 pl-2 pr-2 pb-2 pt-2 border-slate-300 rounded-md'>
                <div className='flex flex-row justify-between p-2 border-b-2 border-b-black mb-3'>
                    <div className='text-2xl font-bold'>
                        Total:
                    </div>
                    <div className='text-lg font-bold'>
                        Rs {totalPrice}
                    </div>
                </div>
                <div className='mb-5'>
                    <p className='font-light text-slate-700'>Taxes and shipping calculated at checkout
                    </p>
                </div>
                <div>
                    <Button label="Checkout"/>
                </div>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CartView