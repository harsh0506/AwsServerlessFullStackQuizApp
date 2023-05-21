import React, { useState } from 'react'
import AddQuestion from './Quiz/AddQuestion'
import Quiz from "./Quiz/Quiz"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage"
import WordCard from './Quiz/ChooseSubject';
function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic or API call with the selected option
    console.log('Selected Option:', selectedOption);
  };

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chooseSubject" element={<WordCard />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App