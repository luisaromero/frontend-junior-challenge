import React, { useEffect, useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from 'react-redux';
import { allTodos, fetchTodo, deleteTodo } from '../../reducers/todoSlice';
import TodoListItem from '../TodoListItem';
import { unwrapResult } from "@reduxjs/toolkit";

import TodoForm from '../TodoForm'


const TodoList = () => {

  const [checked, setChecked] = useState(null)

  const dispatch = useDispatch()
  const todos = useSelector(allTodos)
  const postStatus = useSelector((state) => state.todo.status)

  console.log({ todos, postStatus })

  useEffect(() => {
    if (postStatus === '') {
      dispatch(fetchTodo())
    }
  }, [postStatus, dispatch])

  const handleDeleteTask = async (todoId) => {
    dispatch(deleteTodo(todoId)).then((result) => {
      console.log(result.payload.error)
    });
  }

  const toggleCheckEdit = (todoId, isChecked) => {
    // Fix an ability to toggle task
  };



  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {/* Fix an ability to render todos */}
        {!!todos &&
          <TodoListItem todos={todos} onDelete={handleDeleteTask} />}
      </div>
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
      {/* <TodoForm /> */}
    </div>
  );
};

export default TodoList;
