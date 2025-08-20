import Jwt from "jsonwebtoken";
const createWebToken=(user)=>{
const token = Jwt.sign(user,process.env.JWT_SECRET);
return token
}
export {createWebToken}