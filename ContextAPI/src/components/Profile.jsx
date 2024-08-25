import React, { useContext } from 'react'
import Context from '../myCompo/Context'


function Profile() {
   const {user} = useContext(Context)
   if (!user) {
    return <div className='bg-white border  my-4 p-5 border-gray-200 rounded-xl shadow dark:text-white dark:bg-gray-800 dark:border-white'>Loading...</div>; 
  }

  return (
    <div className='bg-white border p-5 my-4  border-gray-200 rounded-xl shadow dark:text-white dark:bg-gray-800 dark:border-white'>
      Name is {user.firstName} {user.lastName}
    </div>
  )
}

export default Profile

