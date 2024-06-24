import React from 'react'
import { catalouge } from '../Constants'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const ProductCatalouge = () => {
  const productList=useSelector((state)=>state.product.product_count);

  return (
    <div className='flex flex-col padding'>
      <div className='m-3 font-bold text-xl   border-b-2 border-black'>Shop From Our Collections</div>
      <div className=' grid grid-cols-1 lg:grid-cols-4 gap-8 md:grid-cols-3 '>
        {catalouge.map((data,id)=>{
          const prodcut=productList.find((item)=>item.id==id);
            if(prodcut)
            return <ProductCard id={data.id} name={data.name} label={data.label} price={data.price} images={data.images} cnt={prodcut.cnt}/>
            else
            return <ProductCard id={data.id} name={data.name} label={data.label} price={data.price} images={data.images} cnt={0}/>

        })}
    </div>
    </div>
  )
}

export default ProductCatalouge