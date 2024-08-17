import { useState, useRef } from "react";
import Answer from "./components/Answer/Answer.jsx";
import MainScreen from "./components/MainScreen/MainScreen.jsx";
import QuizCreation from "./components/QuizCreationWindow/QuizCreation.jsx";
function App() {
  const [moveToQuiz, setMoveToQuiz] = useState(false);
  const [questionsArr, setQuestionsArr] = useState([]);
  const [question, setQuestion] = useState("");
  const [answ1, setAnsw1] = useState("");
  const [answ2, setAnsw2] = useState("");
  const [answ3, setAnsw3] = useState("");
  const [finishQuiz, setFinishQuiz] = useState(false);
  let questionCounter = useRef(1);
  //////////////////////////////////////////////////
  function handleSubmit(e) {
    e.preventDefault();

    if (questionsArr.length >= 2) {
      alert("You cannot add more than 2 questions.");
      return;
    }

    const questionObj = {
      question,
      answ1,
      answ2,
      answ3,
    };
    setQuestionsArr((prevArr) => [...questionsArr, questionObj]);
    setQuestion("");
    setAnsw1("");
    setAnsw2("");
    setAnsw3("");

    alert("Question has been added!");
    questionCounter.current += 1;
  }

  function handleFinishQuiz() {
    if (questionsArr.length < 1) {
      alert("at least one question");
      return;
    }
    setFinishQuiz(true);
    console.log(finishQuiz);
  }
  return (
    <div className="App">
      {moveToQuiz ? (
        <QuizCreation
          setMoveToQuiz={setMoveToQuiz}
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
        />
      ) : (
        <MainScreen setMoveToQuiz={setMoveToQuiz} finishQuiz={finishQuiz}/>
      )}
    </div>
  );
}

export default App;
