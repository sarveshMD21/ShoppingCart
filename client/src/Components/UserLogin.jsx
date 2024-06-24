import React, { useState } from 'react';
import ErrorAlert from './Resusables/ErrorAlert';
import { alertSliceActions } from '../Store/alert-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSliceActions } from '../Store/auth-slice';


const UserLogin = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(username);
    console.log(password);
    if(username===""||password===""){
      if(username===""){
        setMessage("Kindly enter your username");
      }
      else{
        setMessage("Kindly enter your password");
      }
     dispatch(alertSliceActions.setOpen());      
    }
    else{
      dispatch(authSliceActions.login());
      navigate("/product");
    }
  }

  return (
    <div className='h-screen flex flex-col  bg-slate-100'>
      <ErrorAlert label={message}/>
        <div className='p-2 h-1/4 flex justify-center'>
            <p className='font-bold text-2xl'>Login into Minimalist</p>
        </div>
        <div className='flex justify-center items-center'>
        <div className='lg:w-1/2 md:w-1/3 w-full p-2'>
         <form class="bg-black text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " >
    <div class="mb-4">
      <label class="block  text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    </div>
    <div class="mb-6">
      <label class="block text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none rounded w-full py-2 px-3 mb-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={(e)=>setPassword(e.target.value)} />
      
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
        Log In
      </button>
      
    </div>
  </form>
    </div>
        </div>
    
   </div>
  
  )
}

export default UserLogin