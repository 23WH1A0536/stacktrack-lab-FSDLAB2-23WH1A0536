import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import QuestionComponent from './components/question/QuestionComponent'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-task/:id" element={<QuestionComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
