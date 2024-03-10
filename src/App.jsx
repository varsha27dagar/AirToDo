import React from 'react';
import { GlobalProvider } from './components/GlobalProvider'; // Import GlobalProvider
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import OuterCard from './components/OuterCard';
import NewJob from './components/NewJob';
import UpdateTask from './components/UpdateTask';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  return (
    <GlobalProvider> {/* Wrap your application with GlobalProvider */}
      <DndProvider backend={HTML5Backend}>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' element={<OuterCard />} />
          <Route path='/newjob/:id' element={<NewJob />} />
          <Route path='/updatetask/:id' element={<UpdateTask />} />
        </Routes>
      </DndProvider>
    </GlobalProvider>
  );
}

export default App;
