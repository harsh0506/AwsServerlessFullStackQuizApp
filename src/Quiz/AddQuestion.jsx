
import React, { useEffect, useState } from "react";
import { Modal, Button, Input } from "antd";
import { GetAllTest, PostData, fetchData, Delete } from "./HelperFunctions";
import "./App.css"
import Navbar from "../LandingPage/Navbar";

const { TextArea } = Input;

const m = [
  {
    "question": "gnstg",
    "option4": "gngfn",
    "option3": "gfn",
    "option2": "gfn",
    "option1": "ngfn",
    "id": "892447",
    "answer": "nsgtnsg"
  },
  {
    "subject": "Science: Mathematics",
    "question": "Which mathematician refused the Fields Medal?",
    "option4": "Andrew Wiles",
    "option3": "Grigori Perelman",
    "option2": "Edward Witten",
    "option1": "Terence Tao",
    "id": "12026",
    "answer": "Grigori Perelman"
  },
  {
    "subject": "science",
    "question": "fdbdb",
    "option4": "fdbd",
    "option3": "fdbfdb",
    "option2": "fdbfdb",
    "option1": "bfdb",
    "id": "693999",
    "answer": "drbzrfd"
  },
  {
    "subject": "Science: Mathematics",
    "question": "What is the approximate value of mathematical constant e?",
    "option4": "2.72",
    "option3": "3.14",
    "option2": "1.41",
    "option1": "1.62",
    "id": "12005",
    "answer": "2.72"
  },
  {
    "subject": "Science: Mathematics",
    "question": "The notion of a &quot;set that contains all sets which do not contain themselves&quot; is a paradoxical idea attributed to which English philospher?",
    "option4": "Bertrand Russel",
    "option3": "Alfred North Whitehead",
    "option2": "Francis Bacon",
    "option1": "John Locke",
    "id": "12025",
    "answer": "Bertrand Russel"
  },
  {
    "subject": "Science: Mathematics",
    "question": "What is the fourth digit of &pi;?",
    "option4": "4",
    "option3": "2",
    "option2": "1",
    "option1": "3",
    "id": "12027",
    "answer": "1"
  },
  {
    "subject": "Science: Mathematics",
    "question": "Which of the following dice is not a platonic solid?",
    "option4": "20-sided die",
    "option3": "10-sided die",
    "option2": "8-sided die",
    "option1": "12-sided die",
    "id": "12023",
    "answer": "10-sided die"
  },
  {
    "subject": "Science: Mathematics",
    "question": "What is the alphanumeric representation of the imaginary number?",
    "option4": "x",
    "option3": "i",
    "option2": "e",
    "option1": "n",
    "id": "12012",
    "answer": "i"
  },
  {
    "subject": "Science: Mathematics",
    "question": "How many sides does a trapezium have?",
    "option4": "4",
    "option3": "3",
    "option2": "6",
    "option1": "5",
    "id": "12020",
    "answer": "4"
  },
  {
    "subject": "Science: Mathematics",
    "question": "In the complex plane, multiplying a given function by i rotates it anti-clockwise by how many degrees?",
    "option4": "90",
    "option3": "0",
    "option2": "180",
    "option1": "270",
    "id": "12028",
    "answer": "90"
  },
  {
    "subject": "Science: Mathematics",
    "question": "How many zeros are there in a googol?",
    "option4": "1,000,000",
    "option3": "100",
    "option2": "1,000",
    "option1": "10",
    "id": "12006",
    "answer": "100"
  },
  {
    "subject": "Science: Mathematics",
    "question": "The metric prefix &quot;atto-&quot; makes a measurement how much smaller than the base unit?",
    "option4": "One Quintillionth",
    "option3": "One Septillionth",
    "option2": "One Quadrillionth",
    "option1": "One Billionth",
    "id": "12017",
    "answer": "One Quintillionth"
  },
  {
    "subject": "Science: Mathematics",
    "question": "Which greek mathematician ran through the streets of Syracuse naked while shouting &quot;Eureka&quot; after discovering the principle of displacement?",
    "option4": "Euclid",
    "option3": "Eratosthenes",
    "option2": "Archimedes",
    "option1": "Homer",
    "id": "12021",
    "answer": "Archimedes"
  },
  {
    "subject": "Science: Mathematics",
    "question": "The French mathematician &Eacute;variste Galois is primarily known for his work in which?",
    "option4": "Galois&#039; Continued Fractions",
    "option3": "Galois&#039; Method for PDE&#039;s ",
    "option2": "Abelian Integration",
    "option1": "Galois Theory",
    "id": "12018",
    "answer": "Galois Theory"
  },
  {
    "question": "bdfb",
    "option4": "fbdb",
    "option3": "fdb",
    "option2": "dfb",
    "option1": "fdb",
    "id": "208482",
    "answer": "dfb"
  },
  {
    "subject": "Science: Mathematics",
    "question": "What is the first Mersenne prime exponent over 1000?",
    "option4": "1009",
    "option3": "1069",
    "option2": "2203",
    "option1": "1279",
    "id": "12011",
    "answer": "1279"
  },
  {
    "subject": "Science: Mathematics",
    "question": "What is the symbol for Displacement?",
    "option4": "r",
    "option3": "&Delta;r",
    "option2": "dr",
    "option1": "Dp",
    "id": "12016",
    "answer": "&Delta;r"
  },
  {
    "subject": "Science: Mathematics",
    "question": "In Roman Numerals, what does XL equate to?",
    "option4": "40",
    "option3": "15",
    "option2": "60",
    "option1": "90",
    "id": "12009",
    "answer": "40"
  },
  {
    "subject": "Science: Mathematics",
    "question": "What Greek letter is used to signify summation?",
    "option4": "Omega",
    "option3": "Sigma",
    "option2": "Alpha",
    "option1": "Delta",
    "id": "12014",
    "answer": "Sigma"
  },
  {
    "subject": "Science: Mathematics",
    "question": "Which of the following famous mathematicians died in a duel at the age of 20?",
    "option4": "Gauss",
    "option3": "Galois",
    "option2": "Euler",
    "option1": "Abel",
    "id": "12022",
    "answer": "Galois"
  },
  {
    "subject": "science",
    "question": "hmh",
    "option4": "nxgfn",
    "option3": "fxgnxfg",
    "option2": "mfmx",
    "option1": "xnfg",
    "id": "28188",
    "answer": "hmfhm"
  },
  {
    "subject": "Science: Mathematics",
    "question": "What is the correct order of operations for solving equations?",
    "option4": "Parentheses, Exponents, Addition, Substraction, Multiplication, Division",
    "option3": "Parentheses, Exponents, Multiplication, Division, Addition, Subtraction",
    "option2": "The order in which the operations are written.",
    "option1": "Addition, Multiplication, Division, Subtraction, Addition, Parentheses",
    "id": "12019",
    "answer": "Parentheses, Exponents, Multiplication, Division, Addition, Subtraction"
  },
  {
    "subject": "Science: Mathematics",
    "question": "Which of the following mathematicians made major contributions to game theory?",
    "option4": "Carl Friedrich Gauss",
    "option3": "Leonhard Euler",
    "option2": "John Von Neumann",
    "option1": "Stefan Banach",
    "id": "12024",
    "answer": "John Von Neumann"
  }
]

const QuestionEditor = () => {
  const [questions, setQuestions] = useState(m);

  const [modalVisible, setModalVisible] = useState(false);
  const [subject, setSubject] = useState("science".toLowerCase())
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [selectedTestId, setSelectedTestId] = useState(0);
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });
  const [testData, setTestData] = useState([]);

  useEffect(() => { GetAllTest().then((res) => setTestData(res)).catch(err => console.log(err)) }, [subject])

  const handleEditQuestion = (question) => {
    setEditingQuestion(question);
    setModalVisible(true);
  };

  const handleDeleteQuestion = (questionId) => {

    Delete(String(questionId)).then((res) => setTestData(res)).catch(err => console.log(err))
  };

  const handleModalOk = () => {
    if (editingQuestion) {
      setQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question.id === editingQuestion.id ? { ...editingQuestion } : question
        )
      );
    } else {
      let m = newQuestion
      m['id'] = String(Math.floor(Math.random() * 1000001))
      m["subject"] = subject
      setNewQuestion({ ...newQuestion, id: String(Math.floor(Math.random() * 1000001)), subject });
      console.log(newQuestion)
      PostData(newQuestion).then((res) => setTestData(res)).catch(err => console.log(err))
    }

    setEditingQuestion(null);
    setNewQuestion({
      question: "",
      answer: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    });
    setModalVisible(false);
  };

  const handleModalCancel = () => {
    setEditingQuestion(null);
    setModalVisible(false);
  };

  return (
    <div style={{
      background: "black",
      width: "100vw"
    }}>
      <Navbar />
      <div style={{ marginTop: "4rem" }} className="container mx-auto p-4">
        <h1 style={{ color: "#2dad58" }} className="text-3xl font-bold mb-4">Perform CRUD Operations</h1>
        <p style={{ color: "white" }} className="text-lg mb-4">
          This page allows you to perform Create, Read, Update, and Delete operations on questions.
        </p>
        <div className="flex items-center space-x-4 mb-4">
          <select style={{ background: "#2dad58", color: "white" }} onChange={(e) => setSubject(e.target.value)} className="p-2 rounded-lg border border-gray-300">

            {testData.filter((item, index, self) =>
              index === self.findIndex(i => i.subject === item.subject)
            ).map((item, index) => (<option style={{ color: "white" }} key={index} value={item.subject}>{item.subject}</option>))}
          </select>

          <button onClick={() => setModalVisible(true)} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add Question</button>
        </div>
      </div>



      <div className="question-editor-container">
        {testData
          .filter(item => item.subject === subject)
          .map((question) => (

            <div style={{ width: "100vw" }} className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
              <div className="mb-8">
                <p className="font-medium text-xl">Question:</p>
                <p className="mt-2 text-lg">{question.question}</p>
              </div>
              <div className="mb-8">
                <label className="block mb-2 text-lg font-semibold">

                  <span className="ml-2">Option1 : {question.option1}</span>
                </label>
                <label className="block mb-2 text-lg font-semibold">
                  <span className="ml-2">Option2 : {question.option2}</span>
                </label>
                <label className="block mb-2 text-lg font-semibold">

                  <span className="ml-2">Option3 : {question.option3}</span>
                </label>
                <label className="block mb-2 text-lg font-semibold">

                  <span className="ml-2">Option4 : {question.option4}</span>
                </label>
                <label className="block mb-2 text-lg font-semibold">

                  <span className="ml-2">answer :  {question.answer}</span>
                </label>

              </div>

              <Button type="primary" onClick={() => handleEditQuestion(question)} className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" >
                Edit
              </Button>{" "}


              <Button type="danger" onClick={() => handleDeleteQuestion(question.id)} className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" >
                Delete
              </Button>


            </div>
          ))}
      </div>

      <Modal
        title={editingQuestion ? "Edit Question" : "Add Question"}
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <label>Question:</label>
        <TextArea
          value={editingQuestion ? editingQuestion.question : newQuestion.question}
          onChange={(e) => {
            if (editingQuestion) {
              setEditingQuestion((prevQuestion) => ({ ...prevQuestion, question: e.target.value }));
            } else {
              setNewQuestion((prevQuestion) => ({ ...prevQuestion, question: e.target.value }));
            }
          }}
        />

        <label>Answer:</label>
        <Input
          value={editingQuestion ? editingQuestion.answer : newQuestion.answer}
          onChange={(e) => {
            if (editingQuestion) {
              setEditingQuestion((prevQuestion) => ({ ...prevQuestion, answer: e.target.value }));
            } else {
              setNewQuestion((prevQuestion) => ({ ...prevQuestion, answer: e.target.value }));
            }
          }}
        />

        <label>Option 1:</label>
        <Input
          value={editingQuestion ? editingQuestion.option1 : newQuestion.option1}
          onChange={(e) => {
            if (editingQuestion) {
              setEditingQuestion((prevQuestion) => ({ ...prevQuestion, option1: e.target.value }));
            } else {
              setNewQuestion((prevQuestion) => ({ ...prevQuestion, option1: e.target.value }));
            }
          }}
        />

        <label>Option 2:</label>
        <Input
          value={editingQuestion ? editingQuestion.option2 : newQuestion.option2}
          onChange={(e) => {
            if (editingQuestion) {
              setEditingQuestion((prevQuestion) => ({ ...prevQuestion, option2: e.target.value }));
            } else {
              setNewQuestion((prevQuestion) => ({ ...prevQuestion, option2: e.target.value }));
            }
          }}
        />

        <label>Option 3:</label>
        <Input
          value={editingQuestion ? editingQuestion.option3 : newQuestion.option3}
          onChange={(e) => {
            if (editingQuestion) {
              setEditingQuestion((prevQuestion) => ({ ...prevQuestion, option3: e.target.value }));
            } else {
              setNewQuestion((prevQuestion) => ({ ...prevQuestion, option3: e.target.value }));
            }
          }}
        />

        <label>Option 4:</label>
        <Input
          value={editingQuestion ? editingQuestion.option4 : newQuestion.option4}
          onChange={(e) => {
            if (editingQuestion) {
              setEditingQuestion((prevQuestion) => ({ ...prevQuestion, option4: e.target.value }));
            } else {
              setNewQuestion((prevQuestion) => ({ ...prevQuestion, option4: e.target.value }));
            }
          }}
        />
      </Modal>
    </div>
  );
};

export default QuestionEditor;