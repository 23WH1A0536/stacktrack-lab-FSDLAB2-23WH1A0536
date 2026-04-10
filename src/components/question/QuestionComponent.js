import React from 'react';
import { useState,useEffect } from 'react';
import {useParams, link} from "react-router-dom";

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  // TODO: Define state variables needed for your question set// TODO: Set the base URL for your API
  const _id = useParams();
  const [d,setD] = useState(null)

  

  // TODO: Implement data fetching inside a useEffect hook
  useEffect() => {
    fetch('../api/tasks/:id',
    {Headers : {
      "_id" : "1"
    },
  }).then(r => r.json()).then(setD),[id]
}

  // TODO: Implement any event handlers required by your question set

  return (
    <div>
      */
      {/* TODO: Replace this placeholder with your question set UI */}
      <p>QuestionComponent placeholder — implement your assigned question set here.</p>

      {/* TODO: Render fetched data or form elements as required */}*/
    </div>
  );
}

export default QuestionComponent;
