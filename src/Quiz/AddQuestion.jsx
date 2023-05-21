import React, { useEffect, useState } from 'react'
import axios from 'axios';

function AddQuestion() {
  const [subject, setSubject] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);

  useEffect(() => {
    axios.get(import.meta.env.VITE_APIURL).
      then((res) => console.log(res)).
      catch(err => console.log(err))
  },
    [])

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const optionsData = options.map((option, index) => ({
      [`option${index + 1}`]: option,
    }));

    const quizData = {
      id: String(Math.floor((Math.random() * 1000000) + 1)),
      subject,
      question,
      answer,
      ...optionsData.reduce((acc, option) => ({ ...acc, ...option }), {}),
    };

    const headers = {
      'Content-Type': 'application/json', // Set the Content-Type header to indicate JSON data
      // Add other headers if required
    };

    try {
      const response = await axios.post(import.meta.env.VITE_APIURL, quizData, { headers });
      console.log(response.data);
      // Reset form fields
      setSubject('');
      setQuestion('');
      setAnswer('');
      setOptions(['', '', '', '']);
    } catch (error) {
      console.error('Error:', error);
    }

    console.log(quizData)

  };

  return (
    <div>
      <h2>Add Quiz Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subject">Subject:</label>
          <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            {/* Add more subject options here */}
          </select>
        </div>
        <div>
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div>
          <label>Options:</label>
          {options.map((option, index) => (
            <div key={index}>
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
}

export default AddQuestion