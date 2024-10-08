import React, { useState, useRef, useEffect } from "react";
import MainScreen from "./components/MainScreen/MainScreen.jsx";
import QuizCreation from "./components/QuizCreationWindow/QuizCreation.jsx";

function App() {
  const [moveToQuizCreation, setMoveToQuizCreation] = useState(false);
  const [questionsArr, setQuestionsArr] = useState([]);
  const [question, setQuestion] = useState("");
  const [answ1, setAnsw1] = useState("");
  const [answ2, setAnsw2] = useState("");
  const [answ3, setAnsw3] = useState("");
  const [finishQuiz, setFinishQuiz] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const [quizData, setQuizData] = useState(function () {
    const storedValue = localStorage.getItem("quizes");
    if (storedValue) {
      try {
        return JSON.parse(storedValue);
      } catch (e) {
        console.error("Error parsing quiz data from localStorage:", e);
        return [];
      }
    }

    return [];
  });
  const [correctAnsw, setCorrectAnsw] = useState(0);

  let questionCounter = useRef(1);

  function handleDelete(quizToDelete) {
    const confirmation = window.confirm(
      `Are you sure you want to delete the quiz "${quizToDelete.name}"?`
    );

    if (confirmation) {
      setQuizData((prevQuizData) =>
        prevQuizData.filter((quiz) => quiz.name !== quizToDelete.name)
      );

      setMoveToQuizCreation(false);
      setFinishQuiz(true);
      setSelectedQuiz(null);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (questionsArr.length >= 10) {
      alert("You cannot add more than 10 questions.");
      return;
    }

    const questionObj = {
      correctAnsw,
      question,
      answ1,
      answ2,
      answ3,
    };
    setQuestionsArr((prevArr) => [...prevArr, questionObj]);
    setQuestion("");
    setAnsw1("");
    setAnsw2("");
    setAnsw3("");

    alert("Question has been added!");
    questionCounter.current += 1;
  }

  function handleFinishQuiz() {
    if (questionsArr.length < 1) {
      alert("At least one question is required.");
      return;
    }

    const quizName = window.prompt("Please enter a name for your quiz:");
    if (quizName) {
      const newQuiz = { name: quizName, questions: questionsArr };
      setQuizData((prevQuizes) => [...prevQuizes, newQuiz]);
    }

    setQuestionsArr([]); // Reset questions array after saving quiz
    questionCounter.current = 1; // Reset question counter
    setMoveToQuizCreation(false); // Move back to the main screen
    setFinishQuiz(true); // Ensure finishQuiz is updated after saving
  }

  useEffect(() => {
    // Log quizData whenever it changes
    console.log("Updated quizData:", quizData);
    localStorage.setItem("quizes", JSON.stringify(quizData));
  }, [quizData]);

  return (
    <div className="App">
      {moveToQuizCreation ? (
        <QuizCreation
          setMoveToQuizCreation={setMoveToQuizCreation}
          onSubmit={handleSubmit}
          setAnsw1={setAnsw1}
          setAnsw2={setAnsw2}
          setAnsw3={setAnsw3}
          questionCounter={questionCounter}
          questionsArr={questionsArr}
          setQuestion={setQuestion}
          answ1={answ1}
          answ2={answ2}
          answ3={answ3}
          question={question}
          onHandleFinish={handleFinishQuiz}
          quizData={quizData}
          setQuizData={setQuizData}
          setCorrectAnsw={setCorrectAnsw}
        />
      ) : (
        <MainScreen
          setMoveToQuizCreation={setMoveToQuizCreation}
          finishQuiz={finishQuiz}
          quizData={quizData} // Pass quizData to MainScreen
          onDelete={handleDelete}
          setSelectedQuiz={setSelectedQuiz}
          selectedQuiz={selectedQuiz}
        />
      )}
    </div>
  );
}

export default App;
