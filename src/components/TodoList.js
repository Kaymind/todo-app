import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";


import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, addTodo, removeTodo, updateTodo, doneTodo } = useContext(TodoContext);
  return (
      todos.length ? (
        <table className="table table-bordered my-2">
                <tbody>
                {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo}/>
                    
                ))
                }
                </tbody>
        </table>
      ) : (
        <div className="my-2">No Todo...</div>
      )
  );
};

export default TodoList;
