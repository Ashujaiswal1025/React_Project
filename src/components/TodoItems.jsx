import React, { useState } from 'react'
import { useTodo } from '../Context/ToDOContext'

function TodoItems({ todo }){
  const { toggle_Todo, updateTodo, deleteTodo } = useTodo()
  const [name, setName] = useState(todo.todo)
  const [edited, setEdited] = useState(false)

  const EditBut = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 3.487a2.25 2.25 0 113.182 3.182l-10.5 10.5a2.25 2.25 0 01-1.011.572l-4.5 1.125a.75.75 0 01-.914-.914l1.125-4.5a2.25 2.25 0 01.572-1.011l10.5-10.5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 6.75L17.25 4.5"
      />
    </svg>
  );

  const SaveBut = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 2.25H18a2.25 2.25 0 012.25 2.25v15.5A2.25 2.25 0 0118 22.25H6A2.25 2.25 0 013.75 20V4.5A2.25 2.25 0 016 2.25zM6 2.25v5.75h12V2.25M6 8.75v10.5h12V8.75m-6 8.25h-3v-3h3v3z"
      />
    </svg>
  );

  const toggleComplete = () => {
    console.log(todo.id);
    toggle_Todo(todo.id);
  }

  const deleteMe = () => {
    deleteTodo(todo.id);
  }

  const editMe = () => {
    if (todo.completed) return;

    if (edited) {
      updateTodo(todo.id, { ...todo, todo: name });
      setEdited(false);
    } else {
      setEdited(true);
    }
  }

  return (
    <>
      <div className={`flex border border-black/10 my-3 w-3/4 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black
        ${todo.completed ? "bg-[#eef8e4]" : "bg-transparent"}`} >
        <div
          onClick={() => toggleComplete(todo.id)}
          className={`cursor-pointer rounded-full p-1 my-3 w-5 h-4 flex items-center justify-center 
          ${todo.completed ? 'bg-black' : 'bg-transparent'}
          border-2 border-slate-700 relative`}
        >
          {todo.completed && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`bg-transparent mx-3 w-full px-2 text-2xl rounded-lg outline-none ${todo.completed ? 'line-through' : ''}  ${edited ? 'outline-blue-300 bg-slate-300 outline-1' : ''}`}
          readOnly={!edited}
        />
        {todo.completed ? '' : (
          <button
            className='hover:bg-blue-400 bg-blue-500 text-white p-2 rounded-full outline-none shadow-lg'
            onClick={editMe}
          >
            {edited ? SaveBut : EditBut}
          </button>
        )}
        <button
          className='bg-red-500 hover:bg-red-400 text-white px-3 py-2 rounded-lg outline-none shadow-lg'
          onClick={deleteMe}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </>
  )
}

export default TodoItems;
