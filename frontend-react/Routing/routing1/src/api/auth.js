import axios from "axios"
import config from "../config/config";
const authToken = localStorage.getItem("authToken");
const login=async({email,password})=>{
 const response= await axios.post(`${config.baseapiurl}/api/auth/login`,{email,password},
        { withCredentials: true }
 )
 const token = response.data.token;
 localStorage.setItem("authToken", token);
 return response;
}
const register=async(data)=>{
    const response= await axios.post(`${config.baseapiurl}/api/auth/register`,data)
    return response;
   }
   const UploadImage=async(formData)=>{
    const response= await axios.put(`${config.baseapiurl}/api/auth/upload`,formData,{
            headers: {
              Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data'
            },
    })
    return response;
   }
export{login,register,UploadImage} 