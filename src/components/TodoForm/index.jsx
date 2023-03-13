import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { TextField, Grid, Button, Box } from '@mui/material/';
import { addNewTodo } from "reducers/todoSlice";
import { randomNumber, index } from "shared/adapters";




const TodoForm = ({ openModal }) => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()


    const handleChange = ({ target: { value } }) => setTask(value)

    const postTask = async () => {
        const data = createNewTask()
        dispatch(addNewTodo(data)).then((result) => {
            result.payload.error === true && openModal()
        })
        setTask('')
    }


    // create a new task to send the api with a random id
    const createNewTask = () => {
        const randomId = randomNumber(6, 1000)
        const newTask = {
            id: randomId,
            label: task,
            checked: false,

        }
        return newTask
    }

    // if the task doesnt have a words , the button be disabled
    const disableBtn = Boolean(!task.length)

    return (
        <Box sx={{ px: 12 }}>
            <Grid container spacing={1} >
                <Grid item >
                    <TextField size="small" label="Enter new to do" id="filterBy" onChange={handleChange} value={task} />
                </Grid>
                <Grid item >
                    <Button disabled={disableBtn} onClick={postTask} variant="contained" color="primary">ADD TO DO</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TodoForm;
