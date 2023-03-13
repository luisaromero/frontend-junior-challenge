import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { allTodos, fetchTodo } from '../reducers/todoSlice';
import TodoList from "components/TodoList";
import TodoResults from "components/TodoResults";
import TodoForm from "components/TodoForm";
import { ModalError } from "shared/modalError";


const TodoListApp = () => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const todos = useSelector(allTodos)
    const postStatus = useSelector((state) => state.todo.status)


    const openModal = () => setOpen(true)

    const closeModal = () => setOpen(false)



    useEffect(() => {
        if (postStatus === '') {
            dispatch(fetchTodo())
        }
    }, [postStatus, dispatch])


    return (
        <>
            <TodoList todos={todos} postStatus={postStatus} openModal={openModal} />
            <TodoResults todos={todos} />
            <TodoForm todos={todos} openModal={openModal} />
            {<ModalError open={open} handleClose={closeModal} />}
        </>
    );
};

export default TodoListApp;
