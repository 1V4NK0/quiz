import React from "react";
import "./Quiz.css";

export default function Quiz({ quiz, onDelete }) {
  const handleDelete = () => {
    onDelete(quiz);
  };

  const checkAnswer = (chosenAnswer, questionIndex) => {
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
      console.log("Correct answer!");
      alert("Correct!");
      // Optionally, you can update the state to show feedback to the user
    } else {
      console.log("Incorrect answer.");
      alert("Wrong!");
      // Optionally, you can update the state to show feedback to the user
    }
  };
  return (
    <div className="quiz">
      <h1>{quiz.name}</h1>
      {quiz.questions.map((question, index) => (
        <div key={index}>
          <h3>
            {index + 1}. {question.question}
          </h3>
          <p
            onClick={() => {
              checkAnswer(question.answ1, index);
            }}
          >
            {question.answ1}
          </p>
          <p onClick={() => checkAnswer(question.answ2, index)}>
            {question.answ2}
          </p>
          <p onClick={() => checkAnswer(question.answ3, index)}>
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
