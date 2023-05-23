import { useState, useEffect } from "react";
import Navbar from "../LandingPage/Navbar";

import { useLocation } from "react-router-dom";
import { fetchData } from "./HelperFunctions";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [testData, setTestData] = useState(null);
  const [selectedTestId, setSelectedTestId] = useState(0);
  const [testStarted, setTestStarted] = useState(false);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  const { state } = useLocation();
  const { name } = state;
  const subject = name || "Science: Mathematics";

  useEffect(() => {
    fetchData(subject, setTestData);
  }, [subject]);

  const handleStartTest = () => {

    if (selectedTestId === 0) {
      alert("Please select a test.");
      return;
    }

    if (testData && testData.length > 0) {
      setShowResult(false);
      setCurrentQuestionIndex(0);
      setUserAnswers({});
      setTestStarted(true);
    } else {
      window.alert("Test data is not available. Please try again later.");
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResult(false);
    setTestStarted(false);
  };

  const handleOptionSelect = (event, questionId) => {
    const selectedOption = event.target.value;
    setUserAnswers((prevUserAnswers) => ({
      ...prevUserAnswers,
      [questionId]: selectedOption,
    }));
    setIsAnswerSelected(true);
  };

  const handleNextQuestion = () => {
    if (isAnswerSelected) {
      if (currentQuestionIndex + 1 < testData[selectedTestId].length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setShowResult(true);
      }
      setIsAnswerSelected(false);
    } else {
      alert("Please select an answer before submitting.");
    }
  };

  const calculateScore = () => {
    let score = 0;
    testData[selectedTestId].forEach((question) => {
      const userAnswer = userAnswers[question.id];
      console.log(userAnswer)
      if (userAnswer && userAnswer === question.answer) {
        score += 1;
      }
    });
    return score;
  };

  const renderQuestion = () => {
    if (!testData || testData.length === 0) {
      return null;
    }

    const question = testData[selectedTestId][currentQuestionIndex];
    const { id, question: text, option1, option2, option3, option4 } = question;

    return (

      <div style={{ width: "100vw" }} className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Quiz</h2>
        <div className="mb-8">
          <p className="font-medium text-xl">Question:</p>
          <p className="mt-2 text-lg">{text}</p>
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-lg font-semibold">
            <input
              type="radio"
              value={option1}
              checked={userAnswers[id] === option1}
              onChange={(e) => handleOptionSelect(e, id)}
              disabled={!testStarted}
            />
            <span className="ml-2">{option1}</span>
          </label>
          <label className="block mb-2 text-lg font-semibold">
            <input
              type="radio"
              value={option2}
              checked={userAnswers[id] === option2}
              onChange={(e) => handleOptionSelect(e, id)}
              disabled={!testStarted}
            />
            <span className="ml-2">{option2}</span>
          </label>
          <label className="block mb-2 text-lg font-semibold">
            <input
              type="radio"
              value={option3}
              checked={userAnswers[id] === option3}
              onChange={(e) => handleOptionSelect(e, id)}
              disabled={!testStarted}
            />
            <span className="ml-2">{option3}</span>
          </label>
          <label className="block mb-2 text-lg font-semibold">
            <input
              type="radio"
              value={option4}
              checked={userAnswers[id] === option4}
              onChange={(e) => handleOptionSelect(e, id)}
              disabled={!testStarted}
            />
            <span className="ml-2">{option4}</span>
          </label>
        </div>
        <button
          onClick={handleNextQuestion}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={!testStarted}
        >
          Next
        </button>
      </div>

    );
  };

  const renderResult = () => {
    if (!testData || testData.length === 0) {
      return null;
    }

    const score = calculateScore();
    const totalQuestions = testData[selectedTestId].length;
    const remainingQuestions = totalQuestions - currentQuestionIndex - 1;

    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Quiz Result</h2>
        <p className="text-lg">
          Your score: {score}/{totalQuestions}
        </p>
        <p className="text-lg mt-2">
          Questions done: {currentQuestionIndex + 1}/{totalQuestions}
        </p>
        <p className="text-lg mt-2">
          Questions remaining: {remainingQuestions}
        </p>
        <div className="mt-6">
          <button
            onClick={handleResetQuiz}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={testStarted}
          >
            Reset Test
          </button>

        </div>
      </div >
    );
  };

  return (
    <div style={{ width: "100vw" }}>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        {testData ? (
          <div className="flex flex-col items-center">
            {!testStarted ? (
              <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6">Select Test</h2>
                <div className="mb-8">
                  <select
                    className="w-full rounded-md border-0 py-1.5 px-3 text-lg"
                    value={selectedTestId}
                    onChange={(e) => setSelectedTestId(Number(e.target.value))}
                  >
                    {Object.keys(testData).map((testId) => (
                      <option key={testId} value={testId}>
                        Test {testId}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={handleStartTest}
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Start Test
                </button>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-medium">
                    Question {currentQuestionIndex + 1} of {testData[selectedTestId].length}
                  </p>
                  <p className="text-lg font-medium">
                    {testData[selectedTestId].length - currentQuestionIndex - 1} questions remaining
                  </p>
                </div>
                {showResult ? renderResult() : renderQuestion()}
              </div>
            )}
          </div>
        ) : (
          <p>Loading test data...</p>
        )}
      </div>
    </div>

  );
}

export default App;
