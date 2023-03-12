import React, { useState } from "react";
import { TextField, Grid, Button } from '@mui/material/';
// import "./styles.css";

const TodoForm = () => {
    const [task, setTask] = useState('')

    const handleChange = ({ target: { value } }) => setTask(value)

    //make the function to post to the api the new value

    const postTask = () => console.log('post')

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
