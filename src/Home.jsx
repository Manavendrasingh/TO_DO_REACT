import React from 'react'
import { useSelector } from 'react-redux'
import Display from './Display'

export default function Home() {
    const tododata = useSelector((store)=>store.todo.ToDoData)
  return (
    <div className='flex justify-center items-center flex-col mt-5'>
          {tododata.map((data,idx)=>(
             <Display key = {idx} data = {data} index = {idx}></Display>
          ))}
    </div>
  )
}
