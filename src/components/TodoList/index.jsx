import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from 'react-redux';
// import { listTodos } from '../../reducers/todoSlice';


const TodoList = () => {
  const dispatch = useDispatch()
  // const posts = useSelector(listTodos)
  const handleDelete = (todoId) => {
    // Fix an ability to delete task
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
  };



  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {/* Fix an ability to render todos */}

      </div>
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
    </div>
  );
};

export default TodoList;
