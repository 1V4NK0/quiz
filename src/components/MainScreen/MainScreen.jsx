import React from "react";
import "./MainScreen.css";
import App from "../../App";

export default function MainScreen({ setMoveToQuiz, finishQuiz }) {
  return (
    <>
      {finishQuiz ? (
        <div className="main-screen-quizes">QUIZ</div>
      ) : (
        <div className="main-screen-container">
          <div className="greet">
            <h1>Welcome to quiz creator!</h1>
            <p>by ivanko</p>
          </div>

          <button onClick={() => setMoveToQuiz(true)}>Start!</button>
        </div>
      )}
    </>
  );
}
