import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useSearchParams } from 'react-router-dom';
const Failure = () => {
  const[search]=useSearchParams()
  const info=search.get('data')
  const decodedinfo=atob(info)
   const newinfo=JSON.parse(decodedinfo)
  
  return (
    <div className='space-y-5'> 
   <div className='flex items-center justify-center mt-16'>
   <RxCross2 className='bg-teal-500 text-5xl font-extrabold w-56 h-56 rounded-xl' />
   </div>
   <h1 className='text-center text-green-600 text-xl'>{newinfo.status}</h1>
   <p className='text-lg text-center text-black'>{newinfo.total_amount}</p>
    </div>
  )
}

export default Failure