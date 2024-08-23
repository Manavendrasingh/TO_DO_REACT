import { configureStore } from "@reduxjs/toolkit";
import ToDoSliceReducer from "./ToDoSlice";

const Store = configureStore({
    reducer : {
        todo : ToDoSliceReducer,
    },
})
export default Store