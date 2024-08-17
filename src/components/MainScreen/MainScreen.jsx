import React from "react";
import "./MainScreen.css";

export default function MainScreen({
  setMoveToQuizCreation,
  finishQuiz,
  quizData,
}) {
  return (
    <>
      {finishQuiz ? (
        <div className="main-screen-quizes">
          <h1>Your Quizes</h1>
          <div className="quizzes">
            {quizData?.map((quiz, index) => (
              <div className="quiz-card" key={index}>
                <h3>{quiz.name}</h3>
                <p>{quiz.questions.length} question(s)</p>{" "}
              </div>
            ))}
          </div>
          <button
            onClick={() => setMoveToQuizCreation(true)}
            className="create-quiz-in-menu-btn"
          >
            Create Quiz
          </button>
        </div>
      ) : (
        <div className="main-screen-container">
          <div className="greet">
            <h1>Welcome to quiz creator!</h1>
            <p>by ivanko</p>
          </div>

          <button onClick={() => setMoveToQuizCreation(true)}>Start!</button>
        </div>
      )}
    </>
  );
}
