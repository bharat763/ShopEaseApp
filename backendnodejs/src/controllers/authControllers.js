//  import Jwt from "jsonwebtoken";
import userServices from "../services/userServices.js";
import { createWebToken } from "../helpers/authHelpers.js";
const addUser=async(req,res)=>{
    const data=req.body;
    if(!data.name||!data.email||!data.password) return res.status(422).send("Required necessary field");
    if(data.password!==data.confirmPassword) return res.status(422).send("password and confirm password does not match");
    if(data.password.length<8) return res.status(422).send("password length must be greater than 8");
   try {
    const user=await userServices.register(data)
    var token = createWebToken(user)
    // console.log(token)
    res.cookie("authToken",token,{httpOnly:true})
    res.status(201).json({...user,token})
    
   } catch (error) {
    res.status(500).send(error.message)
   }
}

const loginUser=async(req,res)=>{
    const data=req.body;
   try {
    const user=await userServices.login(data)
    var token = createWebToken(user)
   console.log(token)
    res.cookie("authToken",token,{httpOnly:true})
    res.status(201).json({...user,token})
    
   } catch (error) {
    res.status(500).send(error.message)
   }
}
const logout=(req,res)=>{
res.clearCookie("authToken")
res.status(200).json({
    status:"ok"
});
};
const UploadImage=async(req,res)=>{
//console.log(req.file)
const userId=req.user.id;
console.log(userId);
const file=req.file
console.log(file);
try {
  const uploadedData=await userServices.UploadProfileImage(userId,file)
 console.log(uploadedData);
  res.status(200).json(uploadedData)

} catch (error) {
  res.status(500).send(error.message)
}
}

export {addUser,loginUser,logout,UploadImage};