import React, { useState ,memo, useCallback, useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addData,removeData } from "./Redux/ToDoSlice";
import useRenderCount from "./useRenderCount";
import { shallowEqual } from "react-redux";

const Navbar =()=>{
    let inputvalue = useRef("");
    const todoData = useSelector((store)=>store.todo.ToDoData);
    const dispatch = useDispatch();
    const count = useRenderCount();
    console.log(count);
    
    const handleClick = ()=>{
            if(inputvalue.current.value.trim())
            {
              dispatch(addData(inputvalue.current.value));
              inputvalue.current.value = "";
            }
        
       
    }
  
  return (
    <div className="navbar bg-gray-100 text-black flex justify-center items-center">
      <div className="flex-none gap-2">
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs text-white" 
         ref={inputvalue}
         />
        <button className="btn btn-accent" onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}

export default memo(Navbar);
