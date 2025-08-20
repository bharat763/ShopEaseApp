import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import Form from '../../components/products/Form'
import { getProductById } from '../../api/products'

const EditProduct = () => {
 const navigate= useNavigate()
 const {id}=useParams()
    const [loading,setLoading]=useState(false)
 const [products, setProducts] = useState([]);
   useEffect(() => {
     setLoading(true)
     getProductById(id)
       .then((response) => {
          console.log(response.data)
         setProducts(response.data);
        
       })
       .catch((error) => {
         console.log(error.response.data);
     
       }).finally(()=>{
         setLoading(false)
       });
   },[id]);
   if(loading) return <div className="flex items-center justify-center">Loading.....</div>
   return (
     <div className='ml-96 relative'>
       <button onClick={()=>navigate(-1)} className='bg-black text-white absolute top-0 -left-80 py-2 px-3 rounded-md '><FaArrowLeft /></button>
       <div>
       <Form products={products}/>
       </div>
     </div>
   )
}

export default EditProduct
