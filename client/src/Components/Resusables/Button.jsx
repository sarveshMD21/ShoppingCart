import React from 'react'

const Button = ({label}) => {
  return (
    <button className='bg-black text-white rounded-md p-2 w-full hover:bg-slate-200 hover:text-black'>
        {label}
    </button>
  )
}

export default Button