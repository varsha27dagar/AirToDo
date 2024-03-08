import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
