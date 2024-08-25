import { useContext, useEffect, useState } from 'react'

import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import Context from './myCompo/Context'
import ContextProvider from './myCompo/contextProvider'
import { ThemeProvide } from './myCompo/theme'
import ThemeBtn from './components/ThemeBtn'


function App() {
 
  const [themeMode,setThemeMode] = useState('light')
  

  const darkMode = ()=>{
    setThemeMode('dark')
  }

  const lightMode = ()=>{
     setThemeMode('light')
  }
  
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <>
    <ThemeProvide value={{themeMode,darkMode,lightMode}}>
      <ContextProvider>
        <div className='w-full h-screen flex flex-col justify-center items-center dark:bg-slate-600'>
          <ThemeBtn />
          <div className='bg-white border p-5 border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-white'>
            <h1 className='w-100 m-3 p-3 border-2 text-2xl rounded-xl dark:text-white' >Hello this is context Api</h1>
            <Login />
          </div>
            <Profile />
        </div>
      </ContextProvider>
    </ThemeProvide>
    </>
  )
}

export default App
