import React from 'react'
import '../css/Navbar.css'
import { useNavigate } from 'react-router-dom'; 
function Navbar() {
  const navigate = useNavigate(); 
  function handleHome(){
    navigate('/');
  }
  return (
    <>
    <div className='navbar'>
    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/eef7ff/home.png" alt="home" onClick={handleHome}/>
       <h2>AirToDo</h2>
       <input type="text" placeholder='Search Here' />
    </div>
    </>
  )
}

export default Navbar
