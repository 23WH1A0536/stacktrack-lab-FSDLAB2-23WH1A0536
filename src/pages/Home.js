import React from 'react';

// TODO: Replace placeholder values with actual student and lab identifiers
const STUDENT_ID = 'S23WH1A0536';
const LAB_ID = 'FSDLAB2';

function Home() {
  return (
    <div>
      <h1>Stack Track Lab</h1>
      <p>Student ID: {"23WH1A0536"}</p>
      <p>Lab ID: {"FSDLAB2"}</p>

      {/* TODO: Replace this placeholder with your question set UI */}
      <button onClick={handleEdit}>Edit Task</button>
      <p>QuestionComponent placeholder — implement your assigned question set here.</p>

    </div>
  );
}

export default Home;
