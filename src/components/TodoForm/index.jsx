import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { TextField, Grid, Button } from '@mui/material/';
import { addNewTodo } from "reducers/todoSlice";
import { randomNumber, index } from "shared/adapters";




const TodoForm = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()


    const handleChange = ({ target: { value } }) => setTask(value)

    const postTask = async () => {
        const data = createNewTask()
        dispatch(addNewTodo(data)).then((result) => {
            console.log('result', result)
        })
    }

    const createNewTask = () => {
        const randomId = randomNumber(6, 1000)
        const newTask = {
            id: randomId,
            label: task,
            checked: false,

        }
        return newTask
    }


    const disableBtn = Boolean(!task.length)

    return (
        <Grid container spacing={2} justify="space-between">
            <Grid item md={8} xs={8}>
                <TextField size="small" fullWidth label="Enter new to do" id="filterBy" onChange={handleChange} />
            </Grid>
            <Grid item xs={4} md={4}>
                <Button fullWidth disabled={disableBtn} onClick={postTask} variant="contained" color="primary">ADD TO DO</Button>
            </Grid>
        </Grid>
    )
}

export default TodoForm;
