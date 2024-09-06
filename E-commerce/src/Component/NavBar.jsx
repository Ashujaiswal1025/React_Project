import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function NavBar() {

  const cartItem = useSelector(state => state.cart.cartItem);

  const CartIcon = () => (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXLink="http://www.w3.org/1999/xLink"
      x="0px"
      y="0px"
      width="40px"
      height="36px"
      viewBox="0 0 40 36"
      style={{ enableBackground: "new 0 0 40 36" 
       }}
      xmlSpace="preserve"
    >
      <g id="Page-1_4_">
        <g id="Desktop_4_" transform="translate(-84.000000, -410.000000)">
          <path
            fill="linear-gradient(45deg, #ff6b6b, #f7b733)"
            className="st0"
            d="M94.5,434.6h24.8l4.7-15.7H92.2l-1.3-8.9H84v4.8h3.1l3.7,27.8h0.1
                c0,1.9,1.8,3.4,3.9,3.4c2.2,0,3.9-1.5,3.9-3.4h12.8c0,1.9,1.8,3.4,3.9,3.4c2.2,0,3.9-1.5,3.9-3.4h1.7v-3.9l-25.8-0.1L94.5,434.6"
          />
        </g>
      </g>
    </svg>
  );
  return (
    <div className="bg-[rgba(255,255,255,0.89)] w-full h-18 p-5 fixed top-0 left-0 z-50 flex justify-between shadow-xl">
      <h1 className='text-4xl font-bold font-serif text-transparent bg-clip-text'
        style={{
          backgroundImage: "linear-gradient(45deg, #ff6b6b, #f7b733)",
          backgroundSize: "200% 200%"
        }}><Link to="/">QuickCart</Link></h1>
      <Link to="/CartData" ><CartIcon /></Link>
      {cartItem.length > 0 ?
        <span className='w-6 h-6 rounded-full pb-2 bg-red-500 text-white text-sm
         border-2 text-center border-white right-[13px] top-[12px] absolute'>{cartItem.length}</span> : ""
      }

    </div>
  )
}

export default NavBar
