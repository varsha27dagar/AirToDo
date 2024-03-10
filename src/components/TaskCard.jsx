import React, { useState, useEffect, useContext } from 'react';
import '../css/TaskCard.css'
import { GlobalContext } from './GlobalProvider';
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{useDrag}from'react-dnd'
function TaskCard(props) {
  const { todos, setTodos, progress, setProgress, completed, setCompleted,store,setStore } = useContext(GlobalContext);
  const [isDragging,drag]=useDrag(()=>({
    type:'card',
    item:{id:props.id},
    collect:(monitor)=>({
      isDragging:!!monitor.isDragging(),
    }),
  }));
  function handleDelete(todoId) {
        toast.warning('Task Deleted!')
        props.setValue((prevTodos) => prevTodos.filter((task) => task.id !== todoId));
        setStore((prevTodos) => prevTodos.filter((task) => task.id !== todoId));
        console.log('object')
       
  }

  return (
    <>
    <div className="mmain" ref={drag}>
    <div className="taskcard">
    <NavLink className='none' to={'/updatetask/'+props.id }><div className="title"> 
            <h4>{props.title}</h4>
          </div></NavLink>
          <div className="delete">
            
            <button onClick={() => handleDelete(props.id)}>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-rounded/24/ff/filled-trash.png"
                alt="filled-trash"
              />
            </button>
          </div>
          
        </div>
        <div style={{backgroundColor:props.color,width:'0.3rem',marginBottom:'1rem'}}></div>
        
      </div>
    </>
  );
}
export default TaskCard;
