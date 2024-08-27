import { useState } from "react";
import { TodoProvider } from "./Context/ToDOContext";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

export default function App() {

  const [todos, setTodos] = useState([])

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
    console.log(todos.length)
  }

  const toggle_Todo = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  const deleteTodo = (id)=>{
    setTodos((prev) => prev.filter((prevTodo) => (prevTodo.id !== id)))
  }


  return (
    <TodoProvider value={{ todos, addTodo ,toggle_Todo, updateTodo ,deleteTodo}}>
      <div className="w-full min-h-screen flex flex-col flex-wrap justify-center items-center">
        <div className="bg-white w-11/12 text-center px-10 mx-auto h-96 flex flex-col items-center">

          <h1 className="mb-9 text-4xl">Manage Your TODO's</h1>
          <div className="w-10/12">
            <TodoForm />
          </div>
          <div className="mt-4 w-full">
            {
              sortedTodos.map((todo) => (
                <div key={todo.id} className="w-full flex justify-center ">
                  <TodoItems todo={todo} />
                </div>
              ))            
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}