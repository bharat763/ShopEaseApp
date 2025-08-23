import React, { useState } from "react";
import { Link } from "react-router-dom";
 import shoes from '../../assets/images/shoes.png';
 import { VscEdit } from "react-icons/vsc";
 import { MdDelete,  } from "react-icons/md";
import { DeleteProduct } from "../../api/products";
import { toast } from "react-toastify";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { getAllProduct } from "../../reducer/products/productThunk";
 
// import { useNavigate } from 'react-router-dom'
const ProductsCard = ({id,name,brand,descritpion,price,category,url}) => {
   const [isOpen,setOpen]=useState(false)
   const dispatch=useDispatch()
  async function removeProduct( ){
    setOpen(true)
  }
  async function confirmDelete() {
    try {
      await DeleteProduct(id)
      console.log(id)
      toast(`Product ${name} Successfully deleted`,{
        type:"success",
        autoClose:1500,
      });
      dispatch(getAllProduct())
     } catch (error) {
      toast("error occur during deleting",{
        type:"error",
        autoClose:1500,
      })
      
     }finally{
      setOpen(false)
     }
  }
  return (
    
     <div className="w-70  bg-gray-100 shadow-2xl rounded-lg px-2 py-2 mt-4 space-y-2  relative">
    <p className="absolute top-3 right-7 bg-amber-200 text-sm px-2 py-1 rounded-xl">{brand}</p>
    <img
            src={url??shoes} alt="shoes image"  className="ml-2 w-60 max-h-60 rounded-lg"/>
        <div className="ml-2 space-y-2">
          <h1 className="text-2xl font-semibold text-black">{name}</h1>
          <h2 className="text-xl">{category}</h2>
          <p className="text-justify pr-3">{descritpion}</p>
          <p>

            <span className="text-cyan-400">Rs.{Math.floor(price*0.8)}</span>
            <span className="line-through text-sm ml-2 text-cyan-300">{""} Rs.{Math.floor(price)}</span>
          </p>
        <div className="flex justify-between">
        <Link to={id}>
         <button className="bg-blue-500 text-xl px-3 rounded-lg hover:bg-blue-300">BuyNow</button>
         </Link>
         <div className="flex space-x-2">
         <Link to={`edit/${id}`}>
         <button  className="bg-green-500 text-xl px-3 py-3 rounded-lg hover:bg-green-300"><VscEdit /></button>
         </Link>
         <button onClick={removeProduct} className="bg-red-500 text-xl px-3 rounded-lg hover:bg-red-300"><MdDelete /></button>
         </div>
        </div>
        </div>
        <Modal isOpen={isOpen} setOpen={setOpen} label="Are you suere you want ot delete" button={<button onClick={(confirmDelete)} className='text-red-500 text-xl bg-green-500 px-3 py-2 rounded-lg' >Confirm</button>}/>
      </div>
   
  );

};

export default ProductsCard;
