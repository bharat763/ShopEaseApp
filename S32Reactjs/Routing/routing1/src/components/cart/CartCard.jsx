import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { decreaseQuantity, increaseQuantity, removeProductFromCart } from '../../reducer/cart/cartSlice';

const CartCard = ({id,name,url,brand,price,quantity=1}) => {
  const dispatch=useDispatch()
  return (
    <>
    <div className='flex justify-between items-center space-y-3'>
     <div className=' flex space-x-4 w-12'>
     <img src={url} alt='error' className='w-16 h-16  border my-3 rounded-xl'/>
     <h1 className='text-lg font-semibold mt-6'>{name}
      <span className='text-sm text-gray-400'>{brand}</span>
     </h1>
     </div>
     <p className='ml-20'>{price}</p>
     <h1 className=''>
      <button onClick={()=>dispatch(decreaseQuantity(id))} disabled={quantity==1}><CiCircleMinus className='text-2xl' /></button>
       <span className='text-xl text-back bg-amber-200 mx-3 px-2 py-2 rounded-xl'>{quantity}</span>
      <button onClick={()=>dispatch(increaseQuantity(id))} className='bg-blue-500'><IoIosAddCircleOutline /></button>
      </h1>
     <p className='mr-60'>{price*quantity}</p>
     <button onClick={()=>dispatch(removeProductFromCart(id))}><MdDelete /></button>
 </div>
 
   
 

 
</>
)}
export default CartCard