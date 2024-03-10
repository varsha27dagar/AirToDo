import React, { useState, useEffect, useContext } from 'react';
import '../css/NewJob.css'
import { GlobalContext } from './GlobalProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function NewJob() {
  const { todos, setTodos, progress, setProgress, completed, setCompleted,store,setStore } = useContext(GlobalContext);
  const {id}=useParams();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const notify = () => toast.success('Task Added!');
  const handleAddTask = () => {
    if (taskTitle.trim() === '' || taskDescription.trim() === '') {
      // Check if either title or description is empty
      return; // Exit the function if either is empty
    }
    var stats='upcoming';
    if(id==='1')stats='completed';
    else if(id==='2')stats='inprogress'
    const newTask = { // Create a new task object
      id: uuidv4(), // Generate unique ID (you can use a better approach to generate IDs)
      title: taskTitle,
      description: taskDescription,
      status:stats
    };
    console.log(newTask)
    if(id==='3'){
      setTodos([...todos, newTask]);
      setStore([...store,newTask]);
    }
    else if(id==='2'){
      setProgress([...progress, newTask]);
      setStore([...store,newTask]);
    }
    else if(id==='1'){
      setCompleted([...completed, newTask]);
      setStore([...store,newTask]);
    }
     // Add the new task to the todos array
    notify(); // Show toast notification
    setTaskTitle(''); // Clear task title input field
    setTaskDescription(''); // Clear task description input field
  };
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(store))
  },[store]);
  
  return (
    <>
     <div className='newjob'>
        <h3>Add Task</h3>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder='Task Title'
          required
        /><br></br>
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          cols="20"
          rows="5"
          placeholder='Task Description'
          required
        ></textarea><br></br>
        <button className='btnn' onClick={handleAddTask}>Add</button> {/* Call handleAddTask on button click */}
      </div>
    </>
  )
}

export default NewJob
