import React, { useEffect, useState, useRef } from "react";
import "./Quiz.css";

export default function QuizCreation({
  setMoveToQuiz,
  onSubmit,
  questionsArr,
  questionCounter,
  setAnsw1,
  setAnsw2,
  setAnsw3,
  setQuestion,
  answ1,
  answ2,
  answ3,
  question,
  onHandleFinish,
}) {
  useEffect(() => {
    console.log(questionsArr);
  }, [questionsArr]);
  return (
    <div className="quiz-container">
      <div className="header">
        <button className="escape" onClick={() => setMoveToQuiz(false)}>
          X
        </button>
        <p>Create your quiz! </p>
        <button className="forward" onClick={() => onHandleFinish()}>
          →
        </button>
      </div>

      <form className="input-container" onSubmit={onSubmit}>
        <label>Question Nº{questionCounter.current}</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <label>Answer #1</label>
        <input
          type="text"
          value={answ1}
          onChange={(e) => setAnsw1(e.target.value)}
        />

        <label>Answer #2</label>
        <input
          type="text"
          value={answ2}
          onChange={(e) => setAnsw2(e.target.value)}
        />

        <label>Answer #3</label>
        <input
          type="text"
          value={answ3}
          onChange={(e) => setAnsw3(e.target.value)}
        />

        <button>Add question</button>
      </form>
    </div>
  );
}
