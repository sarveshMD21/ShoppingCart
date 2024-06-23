import React from 'react'
import OrderCard from './OrderCard'


const OrderList = () => {
  return (
    <div className='p-1  flex flex-col ' >
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
    </div>
  )
}

export default OrderList