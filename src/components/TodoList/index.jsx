import React, { useEffect, useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from 'react-redux';
import { allTodos, fetchTodo, deleteTodo, editChecFromATask } from '../../reducers/todoSlice';
import TodoListItem from '../TodoListItem';
import { index } from '../../shared/adapters'
import TodoForm from '../TodoForm'


const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector(allTodos)
  const postStatus = useSelector((state) => state.todo.status)

  console.log({ todos, postStatus })

  const isCheckedInTodoList = (todoId) => {
    const todosIndex = index(todos, 'id', todoId)
    const selectedTodo = !todos[todosIndex].checked;
    toggleCheckEdit({ todoId, isChecked: selectedTodo })
  }


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

  const toggleCheckEdit = ({ todoId, isChecked }) => {
    console.log(todoId, isChecked)
    dispatch(editChecFromATask(todoId, isChecked)).then((result) => {
      console.log(result.payload.error)
    });
  };



  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {!!todos &&
          <TodoListItem todos={todos} onDelete={handleDeleteTask} onCheck={isCheckedInTodoList} />}
      </div>
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
      {/* <TodoForm /> */}
    </div>
  );
};

export default TodoList;
