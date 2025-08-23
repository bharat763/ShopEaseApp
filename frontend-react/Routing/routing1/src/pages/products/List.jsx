import React, { useEffect, useState } from 'react'

import ProductsCard from '../../components/products/Card.jsx'
import Title from '../../components/Title'
// import  products  from '../../constants/data.js'
// import { getProducts } from '../../api/products.js'
import { Link } from 'react-router-dom'
import{useDispatch, useSelector} from "react-redux"
import Loader from './Loader.jsx'
import { getAllProduct, getAllProductCategories } from '../../reducer/products/productThunk.js'
import Filters from '../../components/products/Filters.jsx'
import { resetQuery } from '../../reducer/products/productSlice.js'

const ProductList = () => {
//   const[loading,setLoading]=useState(false);
//  const [products,setProducts]=useState([]);
const{loading,products,query}=useSelector((state)=>state.products);
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getAllProduct(query));
  dispatch(getAllProductCategories());
 
},[dispatch,query]);
// if(loading) return <div className='flex items-center'>Lo ading.....</div>
  return (
    <>
      <section className='py-2'>
        <div className='max-h-screen-xl px-5 mx-auto p-4'>
         <div className='flex justify-between'>
         <Title label="New Arrivels"/>
         <div className='space-x-3'>
         <button onClick={()=>dispatch(resetQuery())} className='bg-red-500 hover:bg-red-300 px-3 py-2 rounded-xl'>Reset</button>
         
         <Link to="add">
         <button className='bg-teal-500 hover:bg-teal-300 px-3 py-2 rounded-xl'>Add</button>
         </Link>
         </div>
         </div>
         <Filters/>
         {loading?(
         <Loader/>
         ):(
          <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-3'>
            {products.length==0?<div className='flex w-full justify-center items-center mt-25 ms-80 text-red-500'>Products not found</div>: products.map((products)=>{
              return(
                <ProductsCard
                key={products._id}
                id={products._id}
                {...products}/>
              );
              })}
            </div>
        ) }
        </div>
     
      </section>
      
    </>
  )
}

export default ProductList