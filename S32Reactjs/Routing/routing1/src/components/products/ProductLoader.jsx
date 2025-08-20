import React from 'react'
import image from '../../assets/images/image1.png'
const ProductLoader = () => {
  return (
    <div className='shadow-xl w-max rounded-xl space-y-2'>
        <img src={image} alt=""  className='ml-2 w-60 max-h-72 rounded-lg animate-pulse'/>
        <div className='w-3/4 h-8 rounded-md border ml-2'></div>
        <h1 className='w-1/2 h-6 rounded-lg border ml-2'></h1>
        <h1 className='w-3/4 h-9 rounded-lg border ml-2'></h1>
        <h1 className='w-1/2 h-8 rounded-lg border ml-2'></h1>

    </div>
  )
}

export default ProductLoader