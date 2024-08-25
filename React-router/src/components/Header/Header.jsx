import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className='flex flex-wrap justify-around items-center w-full fixed top-0 left-0 bg-gray-800 border-b-2 border-gray-700 shadow-lg z-50'>
        <div className='flex items-center py-2'>
          <p className=' text-3xl font-bold text-transparent bg-clip-text text'
            style={{
              backgroundImage: "linear-gradient(45deg, #ff6b6b, #f7b733)",
              backgroundSize: "200% 200%"
            }}>
              MonkeyBoyz
          </p>
        </div>
        <div className='flex items-center py-4'>
          <ul className='flex items-center'>
          <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'text-xl text-orange-500 px-4 py-2 rounded transition-colors duration-300'
                : 'text-xl text-white px-4 py-2 border-2 border-transparent rounded hover:transition-colors duration-300'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive
                ? 'text-xl text-orange-500 px-4 py-2 rounded transition-colors duration-300'
                : 'text-xl text-white px-4 py-2 rounded hover: transition-colors duration-300'
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive
                ? 'text-xl text-orange-500 px-4 py-2 rounded transition-colors duration-300'
                : 'text-xl text-white px-4 py-2 rounded hover: transition-colors duration-300'
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/user'
            className={({ isActive }) =>
              isActive
                ? 'text-xl text-orange-500 px-4 py-2 rounded transition-colors duration-300'
                : 'text-xl text-white px-4 py-2 rounded hover: transition-colors duration-300'
            }
          >
            User
          </NavLink>
        </li>
          </ul>
        </div>
        <div className='flex items-center'>
          <button className='p-2 mx-2 rounded-lg border-2 border-orange-500 text-white text-xl'
          >Sign Up</button>
          <button className='p-2 mx-2 rounded-md bg-orange-500 text-white text-xl'
          >Login</button>
        </div>

      </nav>
    </>
  )
}

export default Header
