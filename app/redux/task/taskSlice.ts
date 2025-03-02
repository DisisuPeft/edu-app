import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../interface/TasksInterfaces";

interface taskState {
    task: Task | null,
    isLoading: boolean
}

const initialState = {
    task: null,
    isLoading: true
} as taskState

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTask: (state, action: PayloadAction<Task>) => {
            state.task = action.payload
        },
        clearTask: (state) => {
            state.task = null
        },
        finishInitialLoadTask: (state) => {
            state.isLoading = false;
        }
    }
})

export const {setTask, clearTask, finishInitialLoadTask} = taskSlice.actions
export default taskSlice.reducer