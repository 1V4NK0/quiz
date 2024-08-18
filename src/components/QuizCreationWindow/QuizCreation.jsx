import React, { useEffect } from "react";
import "./QuizCreation.css";

export default function QuizCreation({
  setMoveToQuizCreation,
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
  setCorrectAnsw,
}) {
  useEffect(() => {
    console.log(questionsArr);
  }, [questionsArr]);

  return (
    <div className="quiz-container">
      <div className="header">
        <button className="escape" onClick={() => setMoveToQuizCreation(false)}>
          X
        </button>
        <p>Create your quiz! </p>
        <button
          className="forward"
          onClick={() => onHandleFinish()} // onHandleFinish is called here
        >
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
        <div className="input-part">
          <input
            type="text"
            value={answ1}
            onChange={(e) => setAnsw1(e.target.value)}
          />
          <input
            type="radio"
            name="correct"
            id="0"
            onChange={() => setCorrectAnsw(0)}
          />
        </div>

        <label>Answer #2</label>
        <div className="input-part">
          <input
            type="text"
            value={answ2}
            onChange={(e) => setAnsw2(e.target.value)}
          />
          <input
            type="radio"
            name="correct"
            id="1"
            onChange={() => setCorrectAnsw(1)}
          />
        </div>

        <label>Answer #3</label>
        <div className="input-part">
          <input
            type="text"
            value={answ3}
            onChange={(e) => setAnsw3(e.target.value)}
          />
          <input
            type="radio"
            name="correct"
            id="2"
            onChange={() => setCorrectAnsw(2)}
          />
        </div>

        <button type="submit">Add question</button>
      </form>
    </div>
  );
}
