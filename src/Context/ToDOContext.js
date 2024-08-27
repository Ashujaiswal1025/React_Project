import { createContext, useContext } from "react";


export const TodoContext = createContext({

    todos: {
        id: 1,
        todo : "wertyu",
        completed: false
    },
    addTodo: (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:()=>{},
    toggle_Todo:(id)=>{}
});

export const TodoProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}


