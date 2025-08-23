import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilters, setLimit,setSort} from '../../reducer/products/productSlice'

const Filters = () => {
    const dispatch=useDispatch()
    const {category=[],query}=useSelector((state)=>state.products)
    function setProductLimit(data){
     dispatch(setLimit(parseInt(data)));
    }

    function setProductSort(data){
        dispatch(setSort(data))
       }
       function setProductByName(data){
        dispatch(setFilters({name:data}))
       }
       function setProductByCategory(data){
        dispatch(setFilters({category:data}))

       }
  return (
    <div className=' w-full rounded-lg px-8  bg-gray-100 shadow-2 py-2   flex justify-between items-center'>
        <div className='space-x-2'>
            <label htmlFor=""> Search name:</label>
            {/* <input type="text" value={query?.filtersname} className='py-1 rounded-lg px-2 border outline-none' onChange={(e)=>setProductByName(e.target.value)}/>old code */}
            <input type="text" value={query?.name} className='py-1 rounded-lg px-2 border outline-none' onChange={(e)=>setProductByName(e.target.value)}/>
        </div>
        <div className='space-x-2'>
            <label htmlFor="">Category:</label>
            <select name="" id="" onChange={(e)=>setProductByCategory(e.target.value)}>
            <option value="">select</option>
           {category.map((category,index)=>(
                <option key={index} value={category}>{category}</option>
            ))}
                
            </select>
            {/* <input type="text"  className='py-1 rounded-lg px-2 border outline-none'/> */}
        </div>
        <div>
            <label htmlFor="" className='mr-3'>sort:</label>
            <select name="" id="" className='space-x-2' onChange={(e)=>setProductSort(e.target.value)}>
                <option value=""  >selected</option>
                <option value={JSON.stringify({createdAt:-1})}>Latest</option>
                <option value={JSON.stringify({price:1})}>Price:Low to High</option>
                <option value={JSON.stringify({price:-1})}>Price:hight to low</option>
            </select>
        </div>
        <div>
            <label htmlFor="" className='ml-3'>Limit:</label>
            <select name="" id="" onChange={(e)=>setProductLimit(e.target.value)}>
                <option value="">select</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
        </div>
    </div>
  )
}

export default Filters