
import React, { useEffect, useState } from "react";
import { Modal, Button, Input } from "antd";
import { GetAllTest, PostData, fetchData, Delete } from "./HelperFunctions";

const { TextArea } = Input;

const QuestionEditor = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      answer: "Paris",
      option1: "London",
      option2: "Paris",
      option3: "Rome",
      option4: "Berlin",
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter",
      option1: "Mars",
      option2: "Jupiter",
      option3: "Venus",
      option4: "Saturn",
    },
  ]);

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
      setNewQuestion({ ...newQuestion, id: String(Math.floor(Math.random() * 1000001)) , subject });
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
    <div>
      <h2>Question Editor</h2>

      <select onChange={(e) => setSubject(e.target.value)} name="subject" id="">
        {testData.filter((item, index, self) =>
          index === self.findIndex(i => i.subject === item.subject)
        ).map((item, index) => (<option key={index} value={item.subject}>{item.subject}</option>))}
      </select>


      {testData
        .filter(item => item.subject === subject)
        .map((question) => (
          <div key={question.id}>
            <h3>Question {question.id}</h3>
            <p>Question: {question.question}</p>
            <p>Answer: {question.answer}</p>
            <p>Option 1: {question.option1}</p>
            <p>Option 2: {question.option2}</p>
            <p>Option 3: {question.option3}</p>
            <p>Option 4: {question.option4}</p>

            <Button type="primary" onClick={() => handleEditQuestion(question)}>
              Edit
            </Button>{" "}
            <Button type="danger" onClick={() => handleDeleteQuestion(question.id)}>
              Delete
            </Button>

            <hr />
          </div>
        ))}

      <Button type="primary" onClick={() => setModalVisible(true)}>
        Add Question
      </Button>

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