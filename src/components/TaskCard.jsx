import React from "react";
import "../css/TaskCard.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function TaskCard(props) {
  function handleDelete(todoId) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((response) => {
        toast.warning('Task Deleted!')
         // Response data, if needed
        
        
      })
      .catch((error) => {
        console.error(
          `Error deleting todo with ID ${todoId}:`,
          error.response.data
        );
      });
  }
  return (
    <>
    <ToastContainer/>
      <div className="mmain">
        <div className="taskcard">
          <div className="title">
            {" "}
            <h4>{props.title}</h4>
          </div>
          <div className="delete">
            {" "}
            <button onClick={() => handleDelete(props.id)}>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-rounded/24/ff/filled-trash.png"
                alt="filled-trash"
              />
            </button>
          </div>
        </div>
        <div
          style={{
            lineHeight: "1rem",
            backgroundColor:props.color,
            marginBottom: "1rem",
            borderRadius: "0rem",
            width: "0.2rem",
          }}
        ></div>
      </div>
    </>
  );
}
export default TaskCard;
