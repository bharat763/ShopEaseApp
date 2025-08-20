import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const Modal = ({isOpen,setOpen,label,button}) => {
  // const [isOpen,setOpen]=useState(true)
  return (
    <div className={`${isOpen?"block":"hidden"}`}>
        <div className='bg-gray-500 fixed  z-50 left-0 top-0  flex justify-center items-center h-svh opacity-50 w-full'>
        <div className='w-full sm:w-2/3 min-h-36  lg:w-1/2 p-6 bg-gray-300  space-y-3 rounded-2xl relative flex items-center justify-center'>
          <button className='absolute top-2 right-4' onClick={()=>setOpen(false)}><RxCross2  className='text-xl'/></button>

    <h1 className='text-3xl text-red-500'> {label}</h1> 
          
         <div className='mt-56'>
        {button}
         </div>
         </div>
        </div>
    </div>
  )
}

export default Modal