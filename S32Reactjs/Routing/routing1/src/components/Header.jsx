import React, { useState } from 'react'
import navMenu from '../constants/NavMenu'
import { NavLink } from 'react-router-dom'
import { IoPerson } from "react-icons/io5";
import { FaShopify } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
// import { logtout } from '../reducer/auth/authSlice'
import Profile from './auth/Profile'


const Header = () => {
  const {user}=useSelector((state)=>state.auth)
  const[isOpen,setOpen]=useState(false)
   const isAuthenticated=user?true:false
    const dispatch= useDispatch()
  const [isMobileMenu,setMobileMenu]=useState(true)
    
  return (


<nav className="bg-white :bg-white-500  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
      <FaShopify  className='text-6xl text-blue-600'/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-teal-500">ShopEase</span>
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <div className='relative'>
{user ? (
 <div>
{isOpen ? null:(<button onClick={()=>setOpen(true)}> <IoPerson className='text-xl' /></button>)}
  <div className='absolute top-4 right-0 bg-slate-300 rounded-xl shadow-2xl'>
  <Profile isOpen={isOpen} setOpen={setOpen}/>
  </div>
    </div> ):null} 
 </div>
      <button  onClick={()=>setMobileMenu(!isMobileMenu)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      
    </div>
    <div className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${isMobileMenu?"hidden":null}  id=navbar-sticky"`}>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900 dark:border-gray-700">
      {navMenu.filter((item)=>item.auth===isAuthenticated).map((menu)=>(
 <li key={menu.route}>
 <NavLink  to={menu.route} className={({isActive})=>isActive ? "bg-blue-500 rounded-lg py-1" : null}> {menu.label}</NavLink>
</li>
      ))}
       
      
        
      </ul>
    </div>
  </div>
</nav>



  )
}

export default Header