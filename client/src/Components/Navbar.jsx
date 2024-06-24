import React from 'react'
import Button from './Resusables/Button'
import { Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authSliceActions } from '../Store/auth-slice'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = ({hide}) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const totalCnt=useSelector((state)=>state.cart.total_cnt);

  const handleLogout=()=>{
    dispatch(authSliceActions.logout());
    navigate("/");
  }

  return (
    <div className="padding flex flex-row bg-slate-100">
        <div className='lg:w-3/4 w-1/2 p-2' >
         <p className='lg:text-4xl text-xl font-bold font-Palanquin '>Minimalist</p>
        </div>
        <div className= {`lg:w-1/4 w-1/2  flex flex-row align-middle ${hide===true?'hidden':'block'}`}>
           <div className='w-1/4 flex justify-end p-2 relative'>
           <Link to="/cart">
           <div   title="checkout cart" className= 'hover:animate-pulse animate-duration-500 rounded-full p-1' >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
           </div>
           </Link>
           
           <div id="cart-badge" class="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-xs text-white bg-red-500 rounded-full">
      {totalCnt}
    </div>
           </div>
           <div className='w-3/4 flex justify-end p-1'>
           <div onClick={handleLogout}>
           <Button label="Log Out"/>
           </div>
           </div>
        </div>
        <div className= {`lg:w-1/4 w-1/2  flex flex-row justify-center align-middle ${hide===true?'block':'hidden'}`}>
           <Link to="/product" className='w-1/2'>
           <Button label="Go Back"/>
           </Link>
        </div>
    </div>
  )
}

export default Navbar