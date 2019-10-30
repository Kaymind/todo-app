import React, { useState, useContext, useEffect } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoInput = () => {
    const [todoText, setTodoText] = useState('');
    const { addTodo, editTodo, alterTodo } = useContext(TodoContext);
    const handleAdd = () => {
        if(editTodo !== null){
            alterTodo(todoText,editTodo.id)
            setTodoText(''); 
        } else {
            if(todoText !== ''){
                addTodo(todoText)
                setTodoText('');
            }
        }
    }

    useEffect(( () => {
        if (editTodo !== null) 
            {
                setTodoText(editTodo.text)
            }
        }), [editTodo])
    return (
        <div className="row">
                <div className="input-group col-md-6 row">
                    <label htmlFor="todoInput" className="col-md-2">Todo: </label>
                    <input 
                        type="text" 
                        id="todoInput" 
                        className="col-md-10" 
                        placeholder="Enter what you want to do here..."
                        value={todoText}
                        onChange={e => setTodoText(e.target.value)}
                    />
                </div>
                <div className="input-group col-md-6">
                    <button onClick={handleAdd}>{ editTodo !== null ? 'EDIT' : 'ADD'}</button>
                </div>
        </div>
    )
}

export default TodoInput;
;