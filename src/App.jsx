import React, { useState } from 'react'
import AddQuestion from './Quiz/AddQuestion'
import Quiz from "./Quiz/Quiz"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage"
import WordCard from './Quiz/ChooseSubject';
import Auth from './Auth/Login';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chooseSubject" element={<WordCard />} />
          <Route path="/AddQuestion" element={<AddQuestion />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/Login" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App