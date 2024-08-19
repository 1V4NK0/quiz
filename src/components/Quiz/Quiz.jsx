import React, { useState } from "react";
import { useRef } from "react";
import "./Quiz.css";

export default function Quiz({ quiz, onDelete }) {
  const handleDelete = () => {
    onDelete(quiz);
  };
  let [correctAnswCounter, setCorrectAnswCounter] = useState(0);

  const checkAnswer = (e, chosenAnswer, questionIndex) => {
    // Retrieve the question from the quiz
    const question = quiz.questions[questionIndex];

    // Get the index of the correct answer
    const correctIndex = question.correctAnsw;

    // Create an array of the current question's answers
    const answerOptions = [question.answ1, question.answ2, question.answ3];

    // Determine the index of the chosen answer
    const chosenIndex = answerOptions.indexOf(chosenAnswer);

    // Check if the chosen index matches the correct index
    if (chosenIndex === correctIndex) {
      e.target.classList.add("correct");
      setCorrectAnswCounter(correctAnswCounter + 1);
      // Optionally, you can update the state to show feedback to the user
    } else {
      e.target.classList.add("wrong");

      // Optionally, you can update the state to show feedback to the user
    }
  };

  return (
    <div className="quiz">
      <h1>{quiz.name}</h1>
      <h4>
        {correctAnswCounter} correct out of {quiz.questions.length}
      </h4>
      {quiz.questions.map((question, index) => (
        <div key={index}>
          <h3>
            {index + 1}. {question.question}
          </h3>
          <p
            onClick={(e) => {
              checkAnswer(e, question.answ1, index);
            }}
          >
            {question.answ1}
          </p>
          <p onClick={(e) => checkAnswer(e, question.answ2, index)}>
            {question.answ2}
          </p>
          <p onClick={(e) => checkAnswer(e, question.answ3, index)}>
            {question.answ3}
          </p>
        </div>
      ))}
      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
