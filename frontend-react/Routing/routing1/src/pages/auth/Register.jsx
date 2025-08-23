import React from 'react'
import { LOGIN_ROUTE } from '../../constants/route'
import RegisterForm from '../../components/auth/RegisterForm'
import bgregister from "../../assets/images/bgregister.png"
import { Link } from 'react-router-dom'
import Title from '../../components/Title'
const Register = () => {
  return (
    <div>
      
      <img src={bgregister} alt='bgimage' className='w-full relative'/>
             <div className='max-h-screen-xl px-5 mx-auto p-4  grid grid-cols-2 absolute top-40 opacity:90 '>
             
              <div className='py-12 px-10'>
              <h1 className='pt-32 text-xl text-cyan-500 font-semibold'>
                Welcome to our Shopping website
              </h1>
              <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, minus!<br/>
                <Link to={LOGIN_ROUTE}>
                <span className='text-emerald-400 text-lg animate-pluse...'>Already have an account please login...</span></Link>
              </p>
              </div>
             <div className='space-y-3'>
             <Title label="Sign up" className='text-2xl font-bold text-blue-500 ml-32'/>
             <RegisterForm/>
             </div>
             
             </div>
             
    </div>
  )
}

export default Register