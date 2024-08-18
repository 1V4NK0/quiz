import React from "react";
import "./Quiz.css";

export default function Quiz({ quiz }) {
  return (
    <div className="quiz">
      <h1>{quiz.name}</h1>
      {quiz.questions.map((question, index) => (
        <div key={index}>
          <h3>{index+1}. {question.question}</h3>
          <p>{question.answ1}</p>
          <p>{question.answ2}</p>
          <p>{question.answ3}</p>
        </div>
      ))}
    </div>
  );
}
