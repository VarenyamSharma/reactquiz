import React, { useState } from "react";
import "./App.css";

function App() {
  // An array of objects, each containing a question, options and an answer
  const questions = [
    {
      question: "What is a data structure?",
      options: [
        "A programming language",
        "A collection of algorithms",
        "A type of computer hardware",
        "A way to store and organize data",
      ],
      answer: "A way to store and organize data",
    },
    {
      question: "What is an array?",
      options: [
        "A type of function",
        "A collection of elements",
        "A single data point",
        "A programming language feature",
      ],
      answer: "A collection of elements",
    },
    {
      question: "What is an object in programming?",
      options: [
        "A data structure that holds values and functions",
        "A function that returns data",
        "A collection of variables only",
        "A type of loop",
      ],
      answer: "A data structure that holds values and functions",
    },
    {
      question: "What does 'inheritance' mean in object-oriented programming?",
      options: [
        "Copying functions from one file to another",
        "Deriving new classes from existing ones",
        "Storing data in variables",
        "Creating loops",
      ],
      answer: "Deriving new classes from existing ones",
    },
    {
      question: "What is recursion?",
      options: [
        "A process of repeating items in a collection",
        "A function that calls itself",
        "Storing multiple data types in one variable",
        "An error in programming",
      ],
      answer: "A function that calls itself",
    },
    {
      question: "What is an API?",
      options: [
        "A way to organize data",
        "A collection of user-defined functions",
        "An interface for communication between different software components",
        "A type of database",
      ],
      answer:
        "An interface for communication between different software components",
    },
  ];

  // State variables to keep track of the current question and the score
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  // State variable to show the result after the last question
  const [showResult, setShowResult] = useState(false);

  // Extract the current question from the array of questions
  const currentQuestion = questions[currentIndex];

  // Function to check the answer and update the state variables
  const checkAnswer = (answer) => {
    if (answer === currentQuestion.answer) {
      // Increase the score by 10 if the answer is correct
      setScore(score + 10);
    }

    // Move to the next question if there are more questions
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      // Show the result after the last question
      setShowResult(true);
    }
  };

  // JSX to render the quiz
  return (
    <div className="container">
      <h1>Quiz</h1>
      <p style={{ fontSize: "18px" }}>Answer the following Questions correctly</p>
      {!showResult ? (
        <div id="quiz">
          <p style={{ fontSize: "18px" }}>
            {currentQuestion.question}
          </p>
          <div id="options" className="options">
            {currentQuestion.options.map((option, i) => (
              <button key={i} onClick={() => checkAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div id="result" className="score">
          <p>Your Score is {score}</p>
        </div>
      )}
    </div>
  );
}

export default App;

