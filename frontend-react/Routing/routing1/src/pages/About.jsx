import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
//import { incrementCount } from '../reducer/counter/counterSlice'

const About = () => {
  const {count}= useSelector((state)=>state.counter)
 // const dispatch=useDispatch()
  return (
    <div className='bg-blue-300'>
  {/* <h1> count:{count}</h1>
  this is about page
  <button onClick={()=>dispatch(incrementCount(5))}>increment</button>
   */}
   <div className="px-6 py-12 max-w-4xl mx-auto bg-amber-200">
      <h1 className="text-3xl font-bold mb-4">About ShopEase</h1>
      <p className="mb-6">
        ShopEase is dedicated to making your online shopping experience smooth, affordable, and secure.
        We provide a wide range of quality products delivered right to your door.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
      <p className="mb-6">
        Started in 2025, ShopEase was born out of a passion for easy and accessible e-commerce.
        From humble beginnings, we've grown into a trusted platform for thousands of customers.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-6">
        To offer top-quality products with excellent service at competitive prices.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Customer Satisfaction</li>
        <li>Integrity</li>
        <li>Innovation</li>
      </ul>
    
      </div>
    </div>
  )
}

export default About