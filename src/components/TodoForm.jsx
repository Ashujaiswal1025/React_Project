import React, { useState } from 'react'
import { useTodo } from '../Context/ToDOContext';

function TodoForm() {

    const [todo,setTodo] = useState('')

    const{ addTodo }= useTodo()

    const addBut = (e)=>{
       e.preventDefault();
       if(!todo) return

       addTodo({todo,complete:false})
       setTodo('')
    }

  return (
    <form className="flex " onSubmit={addBut}>
        <input
        type="text"
        placeholder='Write Task..'
        value={todo}
        className='p-3 border border-slate-400 rounded-l-md bg-slate-700 text-white w-full outline-none'
        onChange={(e)=>setTodo(e.target.value)} />
         <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
    </form>
  )
}

export default TodoForm
