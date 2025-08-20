import React from 'react'
import LoginForm from '../../components/auth/LoginForm'
import Title from '../../components/Title'
import { Link } from 'react-router-dom'
import { REGISTER_ROUTE } from '../../constants/route'
import background from '../../assets/images/background.png'
import image from '../../assets/images/image.png'
const Login = () => {
  return (
    <>
        <img src={image} alt='bgimage' className='w-full relative'/>
             <div className='max-h-screen-xl px-5 mx-auto p-4  grid grid-cols-2 absolute top-40 opacity:90 '>
             
              <div className='py-12 px-10'>
              <h1 className='pt-32 text-xl text-cyan-500 font-semibold'>
                Welcome to Shopping website
              </h1>
              <p className='text-md'>We're glad you're here! our collection and find everything you need 
                <br/>. Happy shopping!<br/>
                <Link to={REGISTER_ROUTE}>
                <span className='text-black-400 text-lg animate-pluse...'>Don't have  acccount Please <b className='text-green-700'>Register</b></span></Link>
              </p>
              </div>
             <div className='space-y-3'>
             <Title label="Login Form" className='text-2xl font-bold text-blue-500 ml-32'/>
             <LoginForm/>
             </div>
             
             </div>
             </>
    
  )
}

export default Login