import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../css/OuterCard.css';
import axios from 'axios';
import TaskCard from'./TaskCard'
function OuterCard() {
  const navigate = useNavigate(); // Get the navigate function

  function handleClick() {
    // Use navigate to navigate to a new route
    navigate('/newjob');
  }
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos?completed=false&_limit=5').then(response=>{
      setTodos(response.data);
    })
    .catch(error=>{
      console.error('error in fetching',error);
    });
  },[]);
  return (
    <div className='main'>
      <div className='upcoming'>
        <h4>Upcoming</h4>
        <ul>{todos.map(todo=>(<TaskCard title={todo.title} id={todo.id} color={'red'} />))}</ul>
        <button className='btn' onClick={handleClick}>Add</button>
      </div>
      <div className='upcoming'>
        <h4>In Progress</h4>
        
        <ul>{todos.map(todo=>(<TaskCard title={todo.title} id={todo.id}color={'yellow'} />))}</ul>
        <button className='btn' onClick={handleClick}>Add</button>
      </div>
      <div className='upcoming'>
        <h4>Completed</h4>
        
        <ul>{todos.map(todo=>(<TaskCard title={todo.title} id={todo.id} color={'green'} />))}</ul>
        <button className='btn' onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}

export default OuterCard
