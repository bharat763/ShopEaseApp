import Products from "../models/Products.js";
import mongoose from "mongoose";
const addProduct=async(data,userId)=>{
  return  await Products.create({...data,createdBy:userId});
}
const getProduct=async(query)=>{
    const limit=query.limit||10;
  const sort=query?.sort? JSON.parse(query.sort):{}
  const filters=query?.filters?JSON.parse(query.filters):{}
  const page=query?.page||1
const pageOff=(page-1)*limit
console.log(filters)
const customQuery=Object.entries(filters).reduce((accum,[key,value])=>{
const result={...accum,[key]:new RegExp(value,"i")}
//const result={...accum,[key]:new RegExp(fitersvalue,"i")}=old code
return result;
},{})
// console.log(customQuery)
  return await Products.find(customQuery).limit(limit).sort(sort).skip(pageOff);
}
const getProductById=async(id)=>{
  return await Products.findById(id);
  // if(!mongoose.Types.ObjectId.isValid(id)){
  //   throw new Error("Invalid product id")
 // }
  // const product=await Products.findById(id);
  // if(!product){
  //   throw new Error("product not found")
  // }
  // return await Products.findById(id);
}
const updatedProduct=async(id,data)=>{

  return await Products.findByIdAndUpdate(id,data,{
    new:true,
  });
}

const deletedProduct=async(id)=>{

  return await Products.findByIdAndDelete(id);
}


const getCategories=async()=>{

  return await Products.distinct("category");
}
const getTotalProducts=async()=>{
  return await Products.countDocuments()
}
export default {addProduct,getProduct,getProductById,updatedProduct,deletedProduct,getCategories,getTotalProducts}