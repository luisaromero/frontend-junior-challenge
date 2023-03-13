import React, { useEffect, useState } from "react";
import "./styles.css";
import { useDispatch } from 'react-redux';
import { deleteTodo, editChecFromATask } from '../../reducers/todoSlice';
import TodoListItem from '../TodoListItem';
import { index } from '../../shared/adapters'


const TodoList = ({ todos, postStatus, openModal }) => {
  const dispatch = useDispatch()
  const isCheckedInTodoList = (todoId) => {
    const todosIndex = index(todos, 'id', todoId)
    const selectedTodo = !todos[todosIndex].checked;
    toggleCheckEdit({ todoId, isChecked: selectedTodo })
  }


  const handleDeleteTask = async (todoId) => {
    dispatch(deleteTodo(todoId)).then((result) => {
      result.payload.error && openModal()
    });
  }

  const toggleCheckEdit = ({ todoId, isChecked }) => {
    const data = { todoId, isChecked }
    dispatch(editChecFromATask(data)).then((result) => {
      result.payload.error && openModal()
    });
  };



  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {!!todos.length ?
          <TodoListItem todos={todos} onDelete={handleDeleteTask} onCheck={isCheckedInTodoList} /> :
          postStatus === "loading" ? <div className="loading">
            Loading ...
          </div> :
            <div className="no-todos">
              Looks like you&apos;re absolutely free today!
            </div>
        }
      </div>

    </div>
  );
};

export default TodoList;
