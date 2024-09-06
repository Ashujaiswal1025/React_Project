import React from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearAllFromCart } from '../Redux-Folder/CartSlice';
import { formatPrice } from '../Redux-Folder/CartSlice';

function CartData() {
  const cartItems = useSelector(state => state.cart.cartItem); // Selecting cart items from Redux state
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const removeDispatch = useDispatch()
  const clearDispatch = useDispatch()

  const removeFromCartHandler = (item) => {
    removeDispatch(removeFromCart(item))
  }

  const clearAllFromCartHandler = (item) => {
    clearDispatch(clearAllFromCart(item))
  }

  return (
    <>
      <div className={`w-full ${cartItems.length === 0 ? "h-screen flex justify-center items-center" : "top-24 p-3"}`}>
        {cartItems.length > 0 ?
          (
            <>
              <button
                className="bg-green-500 hover:bg-green-400 mr-5 p-2 border border-gray-400 rounded-lg shadow-md text-sm text-white font-semibold float-right"
                onClick={() => clearAllFromCartHandler(cartItems)}
              >
                Clear Cart
              </button>
              <table className="w-full border-collapse text-center">
                <thead>
                  <tr>
                    <th className="border-b p-3">Product</th>
                    <th className="border-b p-3">Product Name</th>
                    <th className="border-b p-3">Price</th>
                    <th className="border-b p-3">Quantity</th>
                    <th className="border-b p-3">Total Price</th>
                    <th className="border-b p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-3">
                        <img src={item.image} className="w-20 h-20 rounded-sm mx-auto" alt={item.title} />
                      </td>
                      <td className="p-3">{item.title}</td>
                      <td className="p-3">₹{formatPrice(item.price)}</td>
                      <td className="p-3">{item.quantity}</td>
                      <td className="p-3">₹{formatPrice(item.quantity * item.price)}</td>
                      <td className="p-3">
                        <button
                          className="bg-red-500 hover:bg-red-700 p-2 border border-gray-400 rounded-lg shadow-md text-sm text-white font-semibold"
                          onClick={() => removeFromCartHandler(item)}
                        >
                          Remove From Cart
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="4" className="text-right p-3 font-semibold">Total Amount:</td>
                    <td colSpan="2" className="text-left p-3 font-semibold">₹{formatPrice(totalAmount)}</td>
                  </tr>
                </tbody>
              </table>
            </>

          ) :
          (
            <div className='flex flex-col items-center'>
              <img src="data:image/png;base64,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
              GzAyXL/h8AAAAASUVORK5CYII=" alt="emptyCArt" className='w-72 h-72' />
              <h1 className='lg:text-3xl sm:text-2xl text-gray-500 font-bold font-sans'>
              CART Is EMPTY !
              </h1>
              <p className='text-lg sm:text-sm text-center text-slate-500 font-semibold'>There is Nothing in Your Cart Add some Item from QuickCart</p>
              <button className='bg-green-500 py-2 px-3 text-white font-semibold text-2xl font-sans mt-3 rounded-lg shadow-2xl'
              style={{
                backgroundImage: "linear-gradient(45deg, #ff6b6b, #f7b733)",
                backgroundSize: "200% 200%"
            }}><Link to='/'>GO To QuickCart </Link></button>
            </div>
          )
        }
      </div>
    </>
  );
}

export default CartData;
