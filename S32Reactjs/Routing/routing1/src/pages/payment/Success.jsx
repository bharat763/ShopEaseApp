import React from 'react'
import { TiTick } from "react-icons/ti";
import { useSearchParams } from 'react-router-dom';
const Success = () => {
 const [search]=useSearchParams()
 const info=search.get('data')
const decodedinfo=atob(info)
const newinfo=JSON.parse(decodedinfo)
console.log(newinfo);

  return (
    <div className='space-y-5'>
    <div className='flex items-center justify-center mt-36'> 
    <TiTick  className='bg-teal-500 text-4xl font-extrabold w-60 h-60 rounded-xl'/>
    </div>
    <h1 className='text-center text-green-600 text-xl'>{newinfo.status}</h1>
    <p className='text-lg text-center text-black'>{newinfo.total_amount}</p>
    </div>
    
  )
}

export default Success