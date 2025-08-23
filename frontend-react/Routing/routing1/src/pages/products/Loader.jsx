import React from 'react'
import ProductLoader from '../../components/products/ProductLoader.jsx'
const Loader = () => {
  return (
    <div>
         <div className='w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <ProductLoader/>
            <ProductLoader/>
            <ProductLoader/>
            <ProductLoader/>
            <ProductLoader/>
            <ProductLoader/>

          </div>
    </div>
  )
}

export default Loader