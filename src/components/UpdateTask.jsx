import React, { useState, useEffect, useContext } from 'react';
import '../css/NewJob.css'
import { GlobalContext } from './GlobalProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import'../css/UpdateTask.css'
import { useParams } from 'react-router-dom';
function UpdateTask(props) {
  const { todos, setTodos, progress, setProgress, completed, setCompleted,store,setStore } = useContext(GlobalContext);
  const { id } = useParams();
  const taskToUpdate = store.find(task => task.id === id);

  const [task, setTask] = useState(taskToUpdate);

  const notify = () => {
    toast.success('Task Updated!');
  }

  const handleUpdate = () => {
    const updatedStore = store.map(t => (t.id === id ? task : t));
    setStore(updatedStore);
    notify();
  }
  useEffect(() => {
    setTodos(store.filter(task => task.status === "upcoming"));
    setProgress(store.filter(task => task.status === "inprogress"));
    setCompleted(store.filter(task => task.status === "completed"));
  }, [store]);
   
    return (
      <>
      <div className='newjob'>
        <ToastContainer/>
          <h3>Update Task</h3>
          <input type="text" name="" id="" placeholder='Task Tittle' value={task.title}onChange={(e) => setTask({ ...task, title: e.target.value })} /><br></br>
          <textarea name="" id=""cols="20" rows="5" placeholder='Task Description' value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })}></textarea><br></br>
            <select id="education" value={task.status}onChange={(e) => setTask({ ...task, status: e.target.value })}>
                <option value="upcoming">Upcoming</option>
                <option value="inprogress">InProgress</option>
                <option value="completed">Completed</option>
                </select>
          <br></br> 
          <button className='btnn' onClick={handleUpdate}>Update</button>
      </div>
      </>
    )
}

export default UpdateTask
