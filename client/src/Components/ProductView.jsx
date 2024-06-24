import React from 'react'
import Navbar from './Navbar'
import ProductCatalouge from './ProductCatalouge'
import { useSelector } from 'react-redux'

const ProductView = () => {
  const cart=useSelector((state)=>state.cart.total_price);
  console.log(cart);
  return (
    <div className='flex flex-col'>
        <Navbar />
        <ProductCatalouge/>
    </div>
  )
}

export default ProductView