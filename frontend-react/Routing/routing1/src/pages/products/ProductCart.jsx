import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../../components/cart/CartCard';
import {useNavigate} from 'react-router-dom'
import { PAYMENT_ROUTE } from '../../constants/route';

const ProductCart = () => {
  const{products,totalAmount}=useSelector((state)=>state.cart)
   const navigate= useNavigate()
  return (
    <div className='border h-full px-6 w-full py-8'>
      <h1 className='text-center w-full my-4 text-xl font-semibold text-teal-500'>your cart item <span className='text-blue-500'>({products.length })</span></h1>
        {products.length===0?(
          <div className='flex items-center justify-center '>Cart is Empty</div>):(
        <div className='bg-blue h-full px-12 '>
        <div className='flex justify-between items-center ps-42  py-2 rounded-lg bg-slate-300'>
           <h1>item</h1>
           <h1>price</h1>
           <h1 >quantity</h1>
           <h1>Total</h1>
          <div>
            <div></div>
          </div>
          </div>
          {products.map((item)=>{ 
            return <CartCard key={item._id} id={item._id}  {...item}/>;
          })}
    
        </div>
        )}
        <hr/>
        <h1 className='text-right w-full my-6 pr-24'>ToalAmount:{totalAmount}</h1>
        <hr/>
       <div className='flex  justify-end items-center'>
       
       <button onClick={()=>navigate(PAYMENT_ROUTE,{state:{totalAmount:totalAmount}})} className='w-12 my-8 pr-24 rounded-xl py-2 px-3 bg-indigo-500'>checkout</button>
       </div>
      </div>
    
  )
}

export default ProductCart