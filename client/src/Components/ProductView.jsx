import React from 'react'
import Navbar from './Navbar'
import ProductCatalouge from './ProductCatalouge'

const ProductView = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <ProductCatalouge/>
    </div>
  )
}

export default ProductView