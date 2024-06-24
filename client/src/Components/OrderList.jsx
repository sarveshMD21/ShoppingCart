import React from 'react'
import OrderCard from './OrderCard'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const OrderList = () => {
  const itemList=useSelector((item)=>item.cart.item_list);
  return (
    <div className='p-1  flex flex-col ' >
      {itemList.map((item)=>{
        return <OrderCard imageURL={item.image} name={item.name} price={item.price} cnt={item.cnt} id={item.id}/>
      })}
       
    </div>
  )
}

export default OrderList