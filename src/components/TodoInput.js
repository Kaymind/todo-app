import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoInput = () => {
  const [todoText, setTodoText] = useState("");
  const { addTodo, editTodo, alterTodo } = useContext(TodoContext);
  // check if edit or add todo then process the collect procedure
  const handleAdd = () => {
    if (editTodo !== null) {
      alterTodo(todoText, editTodo.id);
      setTodoText("");
    } else {
      if (todoText !== "") {
        addTodo(todoText);
        setTodoText("");
      }
    }
  };
  // UseEffect hooks to check if the todo item has been selected to edit or not
  useEffect(() => {
    if (editTodo !== null) {
      setTodoText(editTodo.text);
    }
  }, [editTodo]);

  return (
    <div className="row">
      <div className="input-group col-md-6 row">
        <label htmlFor="todoInput" className="col-md-2">
          Todo:{" "}
        </label>
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
        <button onClick={handleAdd}>
          {editTodo !== null ? "EDIT" : "ADD"}
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
