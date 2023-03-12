import React from "react";
import "./styles.css";

const TodoListItem = ({ todos, onCheck, checked, onDelete }) => {
  return (
    <div className="todo-container">
      {todos.map((todosTask, index) => (
        <div className="todo-list-item" key={index}>
          <div
            tabIndex="0"
            role="checkbox"
            aria-checked
            className="todo-list-item-content"
          >
            <input
              tabIndex="-1"
              type="checkbox"
              checked={checked}
              onChange={onCheck}
            />
            <span className={checked ? "todo-list-item-checked" : ""}>{todosTask.label}</span>
          </div>
          <button type="button" className="todo-list-item-delete" onClick={onDelete}>
            x
          </button>
        </div>
      ))}
    </div>
  )
}

export default TodoListItem;
