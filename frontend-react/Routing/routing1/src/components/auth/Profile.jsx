




import React from 'react'
import {useForm} from 'react-hook-form'
//import { IoSparkles } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../reducer/auth/authSlice'
import { RxCross2 } from 'react-icons/rx'
import { UploadImage } from '../../api/auth'

const Profile = ({isOpen,setOpen}) => {
const{register,handleSubmit}=useForm()
    const dispatch=useDispatch();
    const {user}= useSelector((state)=>state.auth)
   async function submit(data){
      const formData=new Array()
     if(data.image&& data.image.length>0){
      formData.append(image,data.image[0])
     }
     await  UploadImage(form)

    }
  return (
    <>
    
       <div className={` relative flex flex-col items-center justify-center  border-b-blue-600 w-max px-2 py-3 rounded-xl space-y-3 ${!isOpen &&"hidden"}`}> 
      <button onClick={()=>setOpen(false)} className='absolute top-1 right-1'> <RxCross2 className="absolute top-0 right-1 'bg-blue-300 text-2xl hover:text-red-500"  /></button>
      {/* <img src={user?.image || "https://via.placeholder.com/150"} alt="Profile" className="w-16 h-16 rounded-full border border-gray-300 shadow-sm" />
      <h1 className="mt-2 text-lg font-semibold">{user?.name || "Guest"}</h1> */}


        {/* <h1 className='mt-4'>{user?._doc?.name}</h1> */}
        <form onSubmit={handleSubmit(submit)} className='flex flex-col items-center space-y-2'>
        {/* <input type='file' placeholder='upload profile'{...register("image",{
          required:true,
        })}/> */}
       <button type='submit' className='bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded-lg'>upload</button>
        </form>
  
 
        <button onClick={()=>dispatch(logout())} className='bg-blue-500 hover:bg-blue-800 cursor-pointer py-2 px-3 rounded-lg '>Logout</button>
       </div>
    </>
  )
}

export default Profile


