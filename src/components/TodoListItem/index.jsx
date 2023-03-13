import React from "react";
import { Tooltip } from '@mui/material/';
import "./styles.css";

const TodoListItem = ({ todos, onCheck, checked, onDelete }) => {


  return (
    <div className="todo-container">
      {todos.map(({ label, id, checked }) => (
        <div className="todo-list-item" key={id}>
          <div
            tabIndex="0"
            role="checkbox"
            aria-checked
            className="todo-list-item-content"
          >
            <Tooltip title="Check">
              <input
                tabIndex="-1"
                type="checkbox"
                checked={checked}
                className="todo-check"
                onChange={() => onCheck(id)}
              />
            </Tooltip>
            <span className={checked ? "todo-list-item-checked" : ""}>{label}</span>
          </div>
          <Tooltip title="Delete">
            <button type="button" className="todo-list-item-delete" onClick={() => onDelete(id)}>
              x
            </button>
          </Tooltip>
        </div>
      ))}
    </div>
  )
}

export default TodoListItem;
