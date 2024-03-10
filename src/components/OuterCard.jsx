import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from './GlobalProvider';
import { useNavigate,NavLink} from 'react-router-dom'; // Import useNavigate hook
import '../css/OuterCard.css';
import axios from 'axios';
import TaskCard from'./TaskCard'
import{useDrag,useDrop}from'react-dnd'
// const getLocalTask=()=>{
//   let list=localStorage.getItem('tasks');
//   console.log(list);
//   if(list){
//     return JSON.parse(localStorage.getItem('tasks'))
//   }
//   else{
//     return[];
//   }
// }
function OuterCard(props) {
  const { todos, setTodos, progress, setProgress, completed, setCompleted,store,setStore } = useContext(GlobalContext); 
  // setStore(getLocalTask());
  const[{isOver},drop]=useDrop(()=>({
        accept:"card",
        drop:(item)=>addtoprogress(item.id),
        collect:(monitor)=>({
          isOver:!!monitor.isOver(),
        })
  }))
  const addtoprogress = (id) => {
    const data = store.filter((task) => id === task.id);
   
    if (data.length > 0) {
      const taskToAdd = data[0];
      taskToAdd.status='inprogress';
      if (taskToAdd.hasOwnProperty('title')) {
        setProgress((progress) => [...progress, taskToAdd]);
        removeTaskk(id); // Remove the task from the 'todos' array after adding to progress
      } else {
        console.error("The task object doesn't have a 'title' property:", taskToAdd);
      }
    } else {
      console.error("Task with ID", id, "not found in the 'store' array.");
    }
    } 
  const removeTaskk = (id) => {
    setTodos((prevTodos) => prevTodos.filter((task) => task.id !== id));
    //setStore((prevTodos) => prevTodos.filter((task) => task.id !== id));
    setCompleted((prevTodos) => prevTodos.filter((task) => task.id !== id));
  };

  //

  const[{isOverr},dropp]=useDrop(()=>({
        accept:"card",
        drop:(item)=>addtocompleted(item.id),
        collect:(monitor)=>({
          isOverr:!!monitor.isOver(),
        })
  }))

  const addtocompleted = (id) => {
    const data = store.filter((task) => id === task.id);
    if (data.length > 0) {
      const taskToAdd = data[0];
      taskToAdd.status='completed';
      if (taskToAdd.hasOwnProperty('title')) {
        setCompleted((completed) => [...completed, taskToAdd]); // Remove the task from the 'todos' array after adding to progress
        removeTask(id);
      } else {
        console.error("The task object doesn't have a 'title' property:", taskToAdd);
      }
    } else {
      console.error("Task with ID", id, "not found in the 'progress' array.");
    }
   
    } 

  const removeTask = (id) => {
    setProgress((prevTodos) => prevTodos.filter((task) => task.id !== id));
    //setStore((prevTodos) => prevTodos.filter((task) => task.id !== id));
    setTodos((prevTodos) => prevTodos.filter((task) => task.id !== id));

  };
  const navigate = useNavigate(); // Get the navigate function

  function handleClick(x) {
    // Use navigate to navigate to a new route
    navigate('/newjob/'+x);
  }
 
  
  
  return (
    <div className='main'>
      <div className='upcoming'>
        <h4>Upcoming</h4>
      <ul>{todos.map(todo=>(<TaskCard key={todo.id} title={todo.title} id={todo.id} setValue={setTodos} color={'red'}/>))}</ul>
        <button className='btn' onClick={() => handleClick(3)}>Add</button>
      </div>
      <div className='upcoming' ref={drop}>
        <h4>In Progress</h4>
        <ul>{progress.map(pro=>(<TaskCard key={pro.id} title={pro.title} id={pro.id} setValue={setProgress} color={'orange'}/>))}</ul>
        <button className='btn' onClick={() => handleClick(2)}>Add</button>
      </div>
      <div className='upcoming' ref={dropp}>
        <h4>Completed</h4>
        <ul>{completed.map(pro=>(<TaskCard key={pro.id} title={pro.title} id={pro.id} setValue={setCompleted} color={'green'}/>))}</ul>
        <button className='btn' onClick={() => handleClick(1)}>Add</button>
      </div>
    </div>
  );
}

export default OuterCard
