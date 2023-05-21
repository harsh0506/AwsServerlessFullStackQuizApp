import { useState, useEffect } from "react";
import Navbar from "../LandingPage/Navbar";
import { openDB } from 'idb';
import { useLocation } from "react-router-dom";
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    option1: "London",
    option2: "Paris",
    option3: "Rome",
    option4: "Berlin",
    ans: "Paris",
  },
  {
    id: 2,
    question: "What is the largest planet in our solar system?",
    option1: "Mars",
    option2: "Jupiter",
    option3: "Venus",
    option4: "Saturn",
    ans: "Jupiter",
  },
  // Add more questions here
];
function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [testData, setTestData] = useState(null);
  const [IdOfTest, setIdOfTest] = useState(0)
  const [recent, setRecent] = useState([])
  const { state } = useLocation();
  const { name } = state;
  const subject = name || "Science: Mathematics".trim()



  useEffect(() => {
    const fetchData = async () => {
      console.log()
      try {
        // Open the IndexedDB database
        const db = await openDB('testDB', 1, {
          upgrade(db) {
            // Create an object store for the cache
            db.createObjectStore('cache');
          },
        });

        // Check if the test data is available in the cache
        const cachedData = await db.get('cache', subject);

        if (cachedData) {
          console.log("data from cache")
          // If data is available in the cache, use it
          setTestData(cachedData);
        } else {
          // If data is not available in the cache, fetch it from the API
          const response = await fetch(import.meta.env.VITE_SPECIFIC_DATA + subject);
          const fetchedData = await response.json();

          // Store the fetched data in the cache
          await db.put('cache', fetchedData, subject);
          console.log("data from api")

          setTestData(fetchedData);
        }
      } catch (error) {
        console.error('Error fetching test data:', error);
      }
    };

    fetchData();
  }, [subject]);

 

  const handleOptionSelect = (questionId, selectedOption) => {
    setUserAnswers((prevUserAnswers) => ({
      ...prevUserAnswers,
      [questionId]: selectedOption,
    }));
    setIsAnswerSelected(true);
  };

  const handleNextQuestion = () => {
    if (isAnswerSelected) {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setShowResult(true);
      }
      setIsAnswerSelected(false);
    } else {
      window.alert("Please select an answer before submitting.");
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResult(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question) => {
      const userAnswer = userAnswers[question.id];
      if (userAnswer && userAnswer === question.ans) {
        score += 1;
      }
    });
    return score;
  };

  const renderQuestion = (question) => {
    const { id, question: text, option1, option2, option3, option4 } = question;

    return (

      <div key={id} style={{
        width: "100vw",
        height: "100vh"
      }} className="flex items-center justify-center h-screen bg-gray-100">
        <div className="max-w-3xl w-full mx-4 md:mx-auto p-6 bg-white rounded-lg shadow-md">
          <div style={{ display: "flex", gap: 30 }}>
            <h2 className="text-3xl font-bold mb-6">Quiz</h2>

            <div className="sm:col-span-3">
              <div className="mt-2">
                <select
                  onChange={(e) => setIdOfTest(parseInt(e.target.value))}
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {testData && testData.length > 0 ? (
                    testData.map((todo, index) => (
                      <option value={index} key={index}>{index}</option>
                    ))
                  ) : (
                    <p>0</p>
                  )}

                </select>
              </div>
            </div>

          </div>
          <form onSubmit={null}>
            <div className="mb-8">
              <p className="font-medium text-xl">Question:</p>
              <p className="mt-2 text-lg">What is the capital of France?</p>
            </div>

            <div className="mb-8">
              <label className="block mb-2 text-lg font-semibold">

                <input
                  type="radio"
                  value={option1}
                  checked={userAnswers[id] === option1}
                  onChange={() => handleOptionSelect(id, option1)}
                />
                <span className="ml-2">{option1}</span>
              </label>

              <label className="block mb-2 text-lg font-semibold">
                <input
                  type="radio"
                  value={option2}
                  checked={userAnswers[id] === option2}
                  onChange={() => handleOptionSelect(id, option2)}
                />
                <span className="ml-2">{option2}</span>
              </label>

              <label className="block mb-2 text-lg font-semibold">
                <input
                  type="radio"
                  value={option3}
                  checked={userAnswers[id] === option3}
                  onChange={() => handleOptionSelect(id, option3)}
                />
                <span className="ml-2">{option3}</span>
              </label>

              <label className="block mb-2 text-lg font-semibold">
                <input
                  type="radio"
                  value={option4}
                  checked={userAnswers[id] === option4}
                  onChange={() => handleOptionSelect(id, option4)}
                />
                <span className="ml-2">{option4}</span>
              </label>
            </div>

            <button
              onClick={handleNextQuestion}
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const score = calculateScore();
    return (

      <div style={{
        width: "100vw",
        height: "100vh"
      }} className="flex items-center justify-center h-screen bg-white-100">
        <div className="max-w-3xl w-full mx-4 md:mx-auto p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-4xl font-bold mb-6">Quiz Result</h2>

          <div className="mb-8">
            <p className="text-2xl font-semibold">Congratulations!</p>
            <p className="text-xl mt-2">Your score: {score}/{questions.length}</p>
            <button onClick={handleResetQuiz}>Reset Quiz</button>
          </div>

          <p className="text-lg">Thank you for taking the quiz.</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      {showResult ? (
        renderResult()
      ) : (
        <div>
          {String(testData[IdOfTest][currentQuestionIndex].id)}
          {renderQuestion(questions[currentQuestionIndex])}
        </div>
      )}
    </div>
  );
}

export default App
