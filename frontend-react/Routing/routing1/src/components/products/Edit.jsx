import React, { useEffect, useState } from 'react'
import Form from '../../components/products/Form'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../api/products';
const EditProduct = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const[loading,setLoading]=useState(false);
    const [products,setProducts]=useState([]);
    useEffect(()=>{
      setLoading(true)
      getProductById(id)
      .then((response)=>{
        setProducts(response.data)
       
      }).catch((error)=>{
    console.log(error?.response?.data||error.message);
    
      }).finally(()=>{
        setLoading(false)
      });
     
    },[id]);  
    if(loading) return <div className='flex items-center'>Loading.....</div>
    return (
        <div className='ml-96 relative'>
            <button onClick={()=>navigate(-1)} className='bg-black text-white py-2 px-3 absolute top-0  -left-80 '><IoMdArrowRoundBack /></button>
          <div>
          <Form products={products}/>
          </div>
        </div>
      )
  
}

export default EditProduct