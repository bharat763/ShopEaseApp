import React from 'react'
import ProductLoader from '../components/products/ProductLoader'
//import background from '../assets/images/background.png'
import contacts from '../assets/images/contacts.png'
const Contact = () => {
  return (
    <div className='bg-'>
      <img src={contacts} alt="image" className='w-full reltive' />
   
      <div className='bg-gray-100 flex items-center justify-center min-h-screen font-sans'>
        <div className='bg-white p-10 rounded-t-[50%] rounded-b-xl shadow-md w-full max-w-md text-center relative'>
        
          <div className='absolute top-0 right-5 text-black text-xl'></div>
          <div class="mb-6">
      <div class="text-3xl mb-1">🛍️</div>
      <h2 class="text-sm tracking-widest font-semibold">ShopEase</h2>
    </div>

 
    <h1 class="text-3xl font-serif font-medium mb-6">Contact Us</h1>

    <div class="space-y-4 text-left">
      <div class="flex items-center gap-3">
        <span class="text-xl">📞</span>
        <span>+977-9789465726</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-xl">🌐</span>
        <span>www.ShopEase.com</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-xl">✉️</span>
        <span>khadka@gmail.com</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-xl">📍</span>
        <span> Anywhere ., Any City</span>
      </div>
    </div>
  </div>


  <div class="absolute bottom-10 text-center w-full text-sm tracking-wide">
    CONNECT WITH US!
        </div>
      </div>
      {/* <ProductLoader/> */}
    </div>
  )
}

export default Contact