
import { useForm } from "react-hook-form";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { EMAIL_REGEX } from "../../constants/regex";
// import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";
// import { HOME_ROUTE } from "../../constants/route";
import { useDispatch, useSelector } from "react-redux";
// import { setUsers } from "../../reducer/auth/authSlice";
// import { useState } from "react";
import Spinner from "../products/Spinner";
import { LoginUser } from "../../reducer/auth/AuthAction";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BiSolidShow } from "react-icons/bi";
import { FaRegEyeSlash } from "react-icons/fa";




const LoginForm = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
//    const{register,handleSubmit} =useForm()
//    const{name,ref,onChange,onBlur}=register("email")
// const[loading,setLoading]=useState(false)
const navigate=useNavigate()
const[showpassword,setshowpassword]=useState(false)
const{loading,error}=useSelector((state)=>state.auth)
const dispatch=useDispatch()
  async function submit(data){
    // setLoading(true)
  try {
 dispatch(LoginUser(data))
  } catch (error) {
    console.log(error)
    // setLoading(false)
  }
   }
   useEffect(()=>{
    toast(error,{
      type:"error",
      autoClose:1500
    })
   },[error])
  return (
    <>
   
    <form  onSubmit={handleSubmit(submit)} className="bg-gray-200 p-10 rounded-xl space-y-6  w-max ">
    <div className=''>
    <label htmlFor='email' className='text-xl mr-3'>Email</label>
    <input type='email'  className='border rounded-lg py-1 px-2 w-full m-y-2'
  
    {...register("email",{
        required:"email is required",
        pattern:{
            value:EMAIL_REGEX,
            message:"email required example@gmail.com"
        }
    })}
    />
    <p className="text-red-300 text-sm mt-2">{errors?.email?.message}</p>
    </div>
    <div className='relative'>
        <label htmlFor='password' className='text-xl mr-3'>password</label>
        <input type={`${showpassword?"text":"password"}`} className='border rounded-lg py-1 px-2 w-full m-y-2'
        {...register("password",{
            required:"password is required",
            // pattern:{
            //     value:EMAIL_REGEX,
            //     message:"email required example@gmail.com"
            // }
        })}/>
        <button className="absolute top-10 right-3" onClick={()=>setshowpassword(!showpassword)}>{showpassword?<BiSolidShow />:<FaRegEyeSlash />}</button>
         <p className="text-red-300 text-sm mt-2">{errors.password?.message}</p>
    </div>
    <div className='flex'>
    {/* <p className='text-red-300  right-4'>Forget password</p> */}
    <FaFacebookF  className='text-2xl text-blue-500 ms-10'/>
    <FaTwitter className='text-2xl text-blue-500 ms-10' />
    <FaGoogle className='text-2xl text-blue-500 ms-10' />
    </div>
    
    <button className='bg-blue-500 inline text-xl font-semibold py-2 px-4 rounded-lg hover:bg-blue-300 ml-18'>Login
    { loading?<Spinner  className='w-8 h-8 inline ml-3'/>:null}
    </button>
  
    </form>
    </>
  )
}

export default LoginForm