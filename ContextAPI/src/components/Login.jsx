import React, { useContext, useState } from 'react'
import Context from '../myCompo/Context'

function Login() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const { setUser } = useContext(Context)

    const handleClick = (e) => {
        e.preventDefault()
        setUser({ firstName, lastName })
    }

    return (
        <div className='flex flex-col'>
            <input
                type="text"
                placeholder='Firstname'
                value={firstName}
                className='w-100 p-3 outline-none  my-4 rounded-lg'
                onChange={(e) => setFirstName(e.target.value)} />
            <input
                type="text"
                placeholder='Lastname'
                value={lastName}
                className='w-100 p-3 outline-none my-4 rounded-lg'
                onChange={(e) => setLastName(e.target.value)} />

            <div className="flex justify-center">
                <button
                    className="w-32 my-5 p-1 outline-none bg-blue-500 text-white text-xl rounded-2xl"
                    onClick={handleClick}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Login
