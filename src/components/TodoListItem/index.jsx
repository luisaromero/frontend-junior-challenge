import React from "react";
import "./styles.css";

const TodoListItem = ({ todos, onCheck, checked, onDelete }) => {


  return (
    <div className="todo-container">
      {todos.map(({ label, id }) => (
        <div className="todo-list-item" key={id}>
          <div
            tabIndex="0"
            role="checkbox"
            aria-checked
            className="todo-list-item-content"
          >
            <input
              tabIndex="-1"
              type="checkbox"
              checked={null}
              onChange={() => onCheck(id)}
            />
            <span className={checked ? "todo-list-item-checked" : ""}>{label}</span>
          </div>
          <button type="button" className="todo-list-item-delete" onClick={() => onDelete(id)}>
            x
          </button>
        </div>
      ))}
    </div>
  )
}

export default TodoListItem;
