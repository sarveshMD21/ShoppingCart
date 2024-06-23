import React from 'react'
import { lotion1 } from '../assets/images'

const OrderCard = () => {
  return (
    <div className='flex mt-2 mb-2 flex-row justify-between bg-slate-100 '>
        <div className='p-2 w-1/4'>
            <img src={lotion1} className='w-30 h-40'/>
        </div>
        <div className='flex flex-col '>
            <div className='h-1/3 flex items-end font-bold text-lg'>
                <p>Niacinamide body lotion</p>
            </div>
            <div className='h-1/3'>
            <p>₹ 289</p>
            </div>
            <div className='h-1/3'>
            <div className='mt-4 flex flex-row justify-between p-2 bg-slate-200'>
            <div className='justify-start rounded-full bg-white hover:bg-slate-300'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

            </div>
            <div>0</div>
            <div className='justify-end rounded-full bg-white hover:bg-slate-300' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>

            </div> 
            {/* <Button label="Add to Cart" /> */}
        </div>
            </div>
        </div>
        <div className='w-1/4 flex justify-center items-end'>
        <div className='text-red-600 hover:-translate-y-2'>
            <button>Remove</button>
        </div>
        </div>
    </div>
  )
}

export default OrderCard