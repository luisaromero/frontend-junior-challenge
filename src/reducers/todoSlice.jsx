import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { index, spliceArr } from 'shared/adapters';
import axios from "axios"

const BASE_URL = "https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos"


const initialState = {
    todos: [],
    status: "",
    error: ""
}

export const fetchTodo = createAsyncThunk("todo/fetchTodo", async () => {
    const response = await axios.get(BASE_URL)
    return response?.data
})

export const editChecFromATask = createAsyncThunk("todo/editChecFromATask", async (data) => {
    const { todoId, isChecked } = data;
    try {
        const response = await axios.patch(`${BASE_URL}/${todoId}`, { checked: isChecked });
        console.log(response, 'res')
        return {
            error: false,
            data: response.data
        }
    } catch (error) {
        return {
            error: true,
            mesagge: error.message
        }
    }
})

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (idTask) => {
    try {
        await axios.delete(`${BASE_URL}/${idTask}`);
        return {
            id: idTask,
            error: false
        }
    } catch (error) {
        return {
            error: true,
            mesagge: error.message
        }
    }
})



const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchTodo.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.todos = action.payload;
            })
            .addCase(fetchTodo.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                if (action.payload.error) return state
                const indexId = index(state.todos, 'id', action.payload.id)
                spliceArr(state.todos, indexId)
                return state
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                console.log('error')
            })
            .addCase(editChecFromATask.fulfilled, (state, action) => {
                const data = action.payload.data
                state.todos[data.id].checked = data.checked
            })
    }
})

export const allTodos = (state) => state.todo.todos;
export const requestStatus = (state) => state.todo.status;



export default todoSlice.reducer;