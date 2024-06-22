import React from 'react'
import { catalouge } from '../Constants'
import ProductCard from './ProductCard'

const ProductCatalouge = () => {
  return (
    <div className='flex flex-col padding'>
      <div className='m-3 font-bold text-xl   border-b-2 border-black'>Shop From Our Collections</div>
      <div className=' grid grid-cols-1 lg:grid-cols-4 gap-8 md:grid-cols-3 '>
        {catalouge.map((data)=>{
            return <ProductCard name={data.name} label={data.label} price={data.price} images={data.images}/>
        })}
    </div>
    </div>
  )
}

export default ProductCatalouge