import React from 'react'
import Form from '../../components/products/Form'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'



const AddProduct = () => {
  const navigate=useNavigate()
  return (
    <div className='ml-96 relative'>
        <button onClick={()=>navigate(-1)} className='bg-black text-white py-2 px-3 absolute top-0  -left-80 '><IoMdArrowRoundBack /></button>
      <div>
      <Form/>
      </div>
    </div>
  )
}

export default AddProduct