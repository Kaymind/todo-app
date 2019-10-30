import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

import TodoItem from "./TodoItem";

const TodoList = () => {
  // Access state and function from Context API
  const { todos, addTodo, removeTodo, updateTodo, doneTodo } = useContext(
    TodoContext
  );
  // Check if are there any todos if not it will show "No Todo... otherwise it will be the rows of todos"
  return todos.length ? (
    <table className="table table-bordered my-2">
      <tbody>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  ) : (
    <div className="my-2">No Todo...</div>
  );
};

export default TodoList;
