import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState( "white")

  return (
    <>
      
      <div className=' w-full h-screen duration-100' style={{background: color}}></div>
      <div className='fixed bottom-12 left-16 shadow-xl flex flex-wrap bg-slate-600 rounded-2xl justify-center'>
        <button onClick={()=>setColor("Red")} className='px-5 py-2 m-3 text-base bg-red-500 text-white rounded-xl'>Red</button>
        <button onClick={()=>setColor("Blue")} className='px-5 py-2 m-3 text-base bg-blue-500 text-white rounded-xl'>Blue</button>
        <button onClick={()=>setColor("Green")} className='px-5 py-2 m-3 text-base bg-green-500 text-white rounded-xl'>Green</button>
        <button onClick={()=>setColor("Yellow")} className='px-5 py-2 m-3 text-base bg-yellow-500 text-white rounded-xl'>Yellow</button>
        <button onClick={()=>setColor("Black")} className='px-5 py-2 m-3 text-base bg-black text-white rounded-xl'>Black</button>
      </div>
    </>
  )
}

export default App
