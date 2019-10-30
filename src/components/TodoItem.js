import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
    const { removeTodo, updateTodo, doneTodo } = useContext(TodoContext);
    return (
        <tr>
            <td style={{width: '50%'}}><span className={ todo.complete ? 'todo-marked' : ''}>{todo.text}</span></td>
            <td style={{width: '50%'}}> 
                {!todo.complete && <Link className="btn" to="" onClick={() => doneTodo(todo.id)}>Done</Link>}
                    
                {!todo.complete && <span>|</span>} 
                {!todo.complete && <Link to="" className="btn" onClick={() => updateTodo(todo)}>Edit</Link>}
                {!todo.complete && <span>|</span>} 
                <Link to="" className="btn" onClick={() => removeTodo(todo.id)}>Remove</Link>
            </td>
        </tr>
    )
}

export default TodoItem;
