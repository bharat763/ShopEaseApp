

 //import Products from "../models/Products.js";
import productServices from '../services/productsServices.js'
const getProductController=async (req,res)=>{
  try {
    const products =await productServices.getProduct(req.query)
        res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message)
    
  }

};
const getProductByIdController=async(req,res)=>{
const id=req.params.id;
try {
  const products=await productServices.getProductById(id)
  if(!products) return res.status(404).send("product not found");
  // //if(products.createdBy!=user.id&&!user.roles.includes("ADMIN"))
  //   {
  //   return res.status(403).send("Access denied");
  // }
  res.json(products);
  
} catch (error) {
  res.status(500).send(error.message)
}
};
const createProductController=async(req,res)=>{
  const data=req.body;
  const userId=req.user.id
  console.log(data);
 // const userId=req.user.id
  if(!data.name) return res.status(422).send('name is required ');
  if(!data.price) return res.status(422).send("price is required");
try {
  
 const createdProduct=await  productServices.addProduct(data,userId)
 res.status(201).json(createdProduct)
} catch (error) {
  res.status(500).send(error)
}
}

const updateProductController=async(req,res)=>{
  const data=req.body;
  const id=req.params.id
  const user=req.user;
try {
  const products=await productServices.getProductById(id)
  if(!products) return res.status(404).send("product not found");
  if(products.createdBy!=user.id&&!user.roles.includes("ADMIN")) {
    return res.status(403).send("Access denied")
  }
 const updateData=await  productServices.updatedProduct(id,data)
 res.status(201).json(updateData);

    
} catch (error) {
  res.status(500).send(error.message)
}
}


const deleteProductController=async(req,res)=>{
  const id=req.params.id
  // const user=req.user;
  // console.log(data);
try {
  console.log("we are in delete controller")
  const products=await productServices.getProductById(id)
   if(!products) return res.status(404).send("product not found");
   await  productServices.deletedProduct(id)
  res.status(200).send("product deleted successfully");
    
} catch (error) {
  console.log("couldnot delete")
  res.status(500).send(error)
}
}
const getCategoryController=async (req,res)=>{
  try {
    const products =await productServices.getCategories()
        res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message)
    
  }

};

const getTotalProductsController=async (req,res)=>{
  try {
    const totalProducts =await productServices.getTotalProducts()
        res.status(200).json(totalProducts);
  } catch (error) {
    res.status(500).send(error.message)
    
  }

};

    export {getProductController,getProductByIdController,createProductController,updateProductController,deleteProductController,getCategoryController,getTotalProductsController};