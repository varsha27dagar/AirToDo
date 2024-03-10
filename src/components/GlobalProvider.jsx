import React, { createContext, useState } from 'react';

export const GlobalContext = createContext(); // Export GlobalContext as named export

export const GlobalProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [store,setStore]=useState([]);

  return (
    <GlobalContext.Provider value={{ todos, setTodos, progress, setProgress, completed, setCompleted,store,setStore }}>
      {children}
    </GlobalContext.Provider>
  );
};
