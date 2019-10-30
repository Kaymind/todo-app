import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v1';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {

    useEffect(()=>{
        const storedTodo = JSON.parse(localStorage.getItem('todos'))
        if(storedTodo) setTodos(storedTodo)
    },[])

    const [editTodo, setEditTodo] = useState(null) 
    const [todos, setTodos]  = useState([
    ]);
    const addTodo = (text, id) => {
        const newTodo = [...todos, {text, complete: false, id: uuid() }]
        setTodos(newTodo)
        localStorage.setItem('todos',JSON.stringify(newTodo))
    }
    const updateTodo = todo => {
        setEditTodo(todo)
    }
    const doneTodo = id => {
        const doneTodo = [...todos]
        const todo = doneTodo.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(doneTodo)
        localStorage.setItem('todos',JSON.stringify(doneTodo))
    }
    const removeTodo = id => {
        const removeTodo = todos.filter(todo => todo.id !== id)
        setTodos(removeTodo);
        localStorage.setItem('todos',JSON.stringify(removeTodo))
    }
    const alterTodo = (text, id) => {
        const altTodo = [...todos]
        const todo = altTodo.find(todo => todo.id === id)
        todo.text = text
        setTodos(altTodo)
        setEditTodo(null)
        localStorage.setItem('todos',JSON.stringify(altTodo))
    }
    return (
        <TodoContext.Provider value={{
            todos,
            addTodo,
            doneTodo,
            removeTodo,
            updateTodo,
            alterTodo,
            editTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;