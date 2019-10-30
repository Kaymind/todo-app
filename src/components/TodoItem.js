import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../contexts/TodoContext";
import PropTypes from "prop-types";

const TodoItem = ({ todo }) => {
  // Access state and function from Context API
  const { removeTodo, updateTodo, doneTodo } = useContext(TodoContext);
  return (
    <tr>
      <td className="p-3">
        <span className={todo.complete ? "todo-marked" : ""}>{todo.text}</span>
      </td>
      <td>
        {!todo.complete && (
          <Link className="btn" to="" onClick={() => doneTodo(todo.id)}>
            Done
          </Link>
        )}
        {!todo.complete && <span>|</span>}
        {!todo.complete && (
          <Link to="" className="btn" onClick={() => updateTodo(todo)}>
            Edit
          </Link>
        )}
        {!todo.complete && <span>|</span>}
        <Link to="" className="btn" onClick={() => removeTodo(todo.id)}>
          Remove
        </Link>
      </td>
    </tr>
  );
};
// Props type checking
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
