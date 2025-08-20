import { v2 as cloudinary } from 'cloudinary';
import User from "../models/User.js"
import bcrypt from "bcryptjs";
import uploaded from '../utils/uploaded.js';
 
const register=async(data)=>{
    // const createUser=new User(data)
    // // await createUser.save()
    try {
        
     const existingUser= await User.findOne({email:data.email})
     if(existingUser) throw new Error("User already exit")
     const hashPassword = bcrypt.hashSync(data.password);
    const createUser=await User.create({
        name:data.name,
        email:data.email,
        phone:data. phone,
        address:data.address,
        image:data.image,
        roles:data.roles,
        password:hashPassword

    });
    return {
    id:createUser._id,
    name:createUser.name,
    phone:createUser.phone,
    address:createUser.address,
    image:createUser.image,
    roles:createUser.roles
    }
    } catch (error) {
        console.log(error.meassage)
     throw error;
    }
}
const login=async(data)=>{
  try {
    
    const existingUser=await User.findOne({email:data.email})
    if(!existingUser) throw new Error("invalid creditenials");
    const isMatch=  bcrypt.compareSync(data.password,existingUser.password);
    if(!isMatch) throw new Error("invalid creditenials");
    return {
        id:existingUser._id,
        name:existingUser.name,
        phone:existingUser.phone,
        address:existingUser.address,
        image:existingUser.image,
        roles:existingUser.roles,
    }; 

  } catch (error) {
    console.log(error.message)
    throw error;
  }
}

const UploadProfileImage=async(userId,file)=>{
const uploadedResult=await uploaded(file)
console.log(uploadedResult)
return await User.findByIdAndUpdate(userId,{image:uploadedResult?.url},{
  new:true
})

}
export default{register,login,UploadProfileImage}
