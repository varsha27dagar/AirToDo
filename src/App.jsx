import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import OuterCard from './components/OuterCard'
import NewJob from './components/NewJob';

function App() {

  return (
    <> 
    <Navbar/>
    <Routes>
    <Route path='/'element={<OuterCard/>}></Route>
    <Route path='/newjob'element={<NewJob/>}></Route>
    </Routes>
    </>
  )
}

export default App
