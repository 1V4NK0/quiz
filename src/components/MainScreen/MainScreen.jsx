import React, { useState } from "react";
import "./MainScreen.css";
import Quiz from "../Quiz/Quiz";
import App from "../../App";

export default function MainScreen({
  setMoveToQuizCreation,
  finishQuiz,
  quizData,
  onDelete,
  setSelectedQuiz,
  selectedQuiz,
}) {
  return (
    <div className="main-screen">
      {selectedQuiz !== null && quizData[selectedQuiz] ? (
        <div className="quiz-view">
          <button onClick={() => setSelectedQuiz(null)} className="back-button">
            Back to Quizzes
          </button>
          <Quiz quiz={quizData[selectedQuiz] || []} onDelete={onDelete} />
        </div>
      ) : finishQuiz || quizData.length >= 1 ? (
        <div className="main-screen-quizes">
          <h1>Your Quizzes</h1>
          <div className="quizzes">
            {quizData?.map((quiz, index) => (
              <div
                className="quiz-card"
                key={index}
                onClick={() => setSelectedQuiz(index)}
              >
                <h3>{quiz.name}</h3>
                <p>{quiz.questions.length} question(s)</p>
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
    </div>
  );
}
