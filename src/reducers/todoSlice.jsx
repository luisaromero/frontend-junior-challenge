import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
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
    }
})

export const allTodos = (state) => state.todo.todos;
export const requestStatus = (state) => state.todo.status;



export default todoSlice.reducer;