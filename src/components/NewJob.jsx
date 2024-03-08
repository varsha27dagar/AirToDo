import React from 'react'
import '../css/NewJob.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewJob() {
  const notify = () => toast.success('Task Added!');
  
  return (
    <>
    <div className='newjob'>
      <ToastContainer/>
        <h3>Add Task</h3>
        <input type="text" name="" id="" placeholder='Task Tittle' /><br></br>
        <textarea name="" id=""cols="20" rows="5" placeholder='Task Description'></textarea><br></br>
        <button className='btnn' onClick={notify}>Add</button>
    </div>
    </>
  )
}

export default NewJob
