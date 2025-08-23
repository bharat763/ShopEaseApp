import React, { useEffect, useState } from 'react'
// import { FaLeaf } from 'react-icons/fa'
import { getProductById } from '../../api/products'

import {useNavigate,useParams} from 'react-router-dom'
// import shoes from '../../assets/images/shoes.png'
// import Title from '../../components/Title'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../reducer/cart/cartSlice'
import { CART_ROUTE } from '../../constants/route'
const ProductDetails = () => {
    const {id}=useParams()  
         const dispatch=useDispatch()

    const navigate=useNavigate()
    const[loading,setLoading]=useState(false);
   const [products,setProducts]=useState([]);
useEffect(()=>{
  setLoading(true)
  getProductById(id)
  .then((response)=>{
    setProducts(response.data)
   
  }).catch((error)=>{
console.log(error.response.data);

  }).finally(()=>{
    setLoading(false)
  });
 
},[id]);  
if(loading) return <div className='flex items-center'>Loading.....</div>
  return ( 
    <>
  <div className='relative'>
    <button onClick={()=>navigate(-1)} className='bg-black text-white absolute top-1 left-4 py-2 px-3'>back</button>
    <div className='md:h-96 lg:max-h-svh px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      <img src={products.url} alt='' className='sm:w-1/2 md:w-sm w-sm lg:w-2/2 rounded-md'/>
      <div>
        <div className='ml-2 space-y-5 px-4 h-svh mt-7'>
          <span className='bg-amber-200 text-sm px-2 py-1 rounded-xl'>{products.brand}</span>
          <h1 className='text-2xl font-semibold text-black'>{products.name}</h1>
          <h2 className='text-xl'>{products.category}</h2>
          <p className='text-justify pr-3'>
             {products.description}
          </p>
          <p>
            <span className='text-cyan-400'>Rs.${Math.floor(products.price*0.8)}</span>
            <span className='line-through text-sm ml-2 text-cyan-300'>Rs.${Math.floor(products.price)}</span>
          </p>
          <button onClick={()=>{
            dispatch(addToCart(products));
             navigate(CART_ROUTE);}}
            className='bg-blue-500 text-xl px-3 py-2 rounded-lg hover:bg-blue-300'>AddToCart</button>
        </div>
      </div>
    </div>

  </div>

    </>
  )
}

export default ProductDetails;