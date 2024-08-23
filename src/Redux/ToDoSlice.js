import { createSlice } from "@reduxjs/toolkit";

const ToDoSlice = createSlice({
    name : "ToDO",
    initialState : {
        ToDoData : [],
    },
    reducers :{
        addData : (state,action)=>{
            let data = action.payload;
            state.ToDoData.push(data);
        },
        removeData : (state,action)=>{
            let idx =  action.payload;
            let data = [...state.ToDoData];
            let finddata = data.splice(idx,1);
            state.ToDoData = [...data];
        }
    }
})

export const {addData,removeData} = ToDoSlice.actions;
export default ToDoSlice.reducer;