import React from 'react';
import { useState,useEffect } from 'react';
import {useParams, useNavigate} from "react-router-dom";

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  // TODO: Define state variables needed for your question set// TODO: Set the base URL for your API
  const {id} = useParams();
  const [d,setD] = useState({
      title : "",
      description : "",
      status : ""
  })
  const navigate = useNavigate()
  

  // TODO: Implement data fetching inside a useEffect hook
  useEffect(() => {
    fetch(`../api/tasks/${id }`)
    .then(r => r.json()).then(data => setD(data))
  },[id]);



  // TODO: Implement any event handlers required by your question set
const handleEdit = (e) => {
  setD({
    ...d, [e.target.name] : e.target.value
  })
}

const handleSubmit = (e) => {
  e.preventDefault();
  fetch(`../api/tasks/${id}`,
  {
    method : "PUT",
    headers :{
      "Content-Type" :  "application/json"
    },
    body : JSON.stringify(d)
  }).then(r => r.json()).then(data => {
    console.log("Updated details:", data)
    navigate("/")
  })
}

  return (
    <div>
        <h1>Edit Task</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          name='title'
          value={d.title}
          onChange={handleEdit}
          placeholder='title'
          />
          <br />
          <textarea name='description'
          value={d.description}
          onChange={handleEdit}
          placeholder='description'
          />
          <br />  
          <select name='status'
          value={d.status}
          onChange={handleEdit}>
            <option value= "" >Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <br />
          <button type='submit'>Update Task</button>
        </form>
      {/* TODO: Replace this placeholder with your question set UI */}
      <p>QuestionComponent placeholder — implement your assigned question set here.</p>

      {/* TODO: Render fetched data or form elements as required */}
    </div>
  );
}

export default QuestionComponent;
