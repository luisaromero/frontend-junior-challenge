import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { allTodos, fetchTodo } from '../reducers/todoSlice';
import TodoList from "components/TodoList";
import TodoResults from "components/TodoResults";
import TodoForm from "components/TodoForm";


const TodoListApp = () => {
    const dispatch = useDispatch()
    const todos = useSelector(allTodos)
    const postStatus = useSelector((state) => state.todo.status)

    console.log({ todos, postStatus })


    useEffect(() => {
        if (postStatus === '') {
            dispatch(fetchTodo())
        }
    }, [postStatus, dispatch])

    return (
        <>
            <TodoList todos={todos} />
            <TodoResults todos={todos} />
            <TodoForm />
        </>
    );
};

export default TodoListApp;
