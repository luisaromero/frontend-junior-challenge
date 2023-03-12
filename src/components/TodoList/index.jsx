import React, { useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from 'react-redux';
import { allTodos, fetchTodo } from '../../reducers/todoSlice';
import TodoListItem from '../TodoListItem'


const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector(allTodos)
  const postStatus = useSelector((state) => state.todo.status)

  console.log({ todos, postStatus })

  useEffect(() => {
    if (postStatus === '') {
      dispatch(fetchTodo())
    }
  }, [postStatus, dispatch])

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
        {!!todos &&
          <TodoListItem todos={todos} />}
      </div>
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
    </div>
  );
};

export default TodoList;
