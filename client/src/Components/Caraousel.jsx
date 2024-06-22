import React from 'react'
import { useState } from 'react'

const Caraousel = ({images}) => {
  
  const [index,setIndex]=useState(0);

  let lf=0;
  let ri=images.length-1;

  const handleIncrement=()=>{
    setIndex(index+1);
  }
  
  const handleDecrement=()=>{
    setIndex(index-1);
  }

  return (
    <div className='flex flex-col h-full w-full '>
        <div>
        <div className='h-full'>
            <img src={images[index]}  className='w-full h-full' />
        </div>
        </div>
       
        <div className={`absolute top-1/2  rounded-full bg-white hover:bg-slate-400 ${index==lf?'hidden':'block'}`} onClick={handleDecrement} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

        </div>
        <div className={`absolute right-0 top-1/2    rounded-full  bg-white hover:bg-slate-400 ${index==ri?'hidden':'block'}`} onClick={handleIncrement}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>


        </div>
        <div className=' flex flex-row justify-center space-x-2'> 
        
        {images.map((ele,id)=>{
        return <div>
 <button class={`w-3 h-3 border-2 border-black rounded-full ${id==index?'bg-black ':'bg-opacity-5 bg-black'}`}></button>
        </div>
        })}
       
        
        
        </div>
    </div>
  )
}

export default Caraousel