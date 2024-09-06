import React from 'react'
import { useDispatch } from 'react-redux'
import { formatPrice } from '../Redux-Folder/CartSlice';
import { addToCart } from '../Redux-Folder/CartSlice';
import products from '../ProductData/product.json'

function HomeBar() {

  const dispatch = useDispatch();

  const addToCartHandler = (product)=>{
    dispatch(addToCart(product))
  }

  return (
    <div className='mt-28 mx-3 mb-2 p-10 bg-gray-200 grid md:grid-cols-2 md:grid-rows-10 sm:grid-cols-2 sm:grid-rows-10 lg:grid-cols-5 lg:grid-rows-4 gap-8 rounded-lg'>
      {products.map((product) => (
        <div key={product.id} className=" w-full lg:w-full lg:h-full bg-slate-50 rounded-2xl p-5 shadow-xl">
          <img className="h-60 w-full rounded-2xl" src={product.image} />
          <div className="flex mt-4 mb-1 h-14 items-center justify-between">
            <h1 className='text-2xl text-gray-600'>{product.title}</h1>
            <span className=' text-green-500 font-extrabold px-[2px] py-[1px] rounded-md'>{product.rating.rate}&nbsp;★</span>
          </div>
          <p className='text-xs text-gray-500 leading-tight h-12 overflow-hidden'>{product.description}</p>
          <div className="flex mt-3 items-center justify-between">
            <p className='text-2xl font-sans'>₹{formatPrice(Math.floor(product.price))}</p>
            <button className='bg-yellow-300 p-1 border-1/10 border-gray-400 rounded-lg shadow-md text-sm font-semibold' onClick={()=>addToCartHandler(product)}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeBar
