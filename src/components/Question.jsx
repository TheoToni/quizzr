import React from "react";
import data from "../data";

function Question() {
  const checkAnswerButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setcurrentQuestion(nextQuestion);
    }
  };

  const [questions, setQuestions] = React.useState(data);
  const [currentQuestion, setcurrentQuestion] = React.useState(0);

  return (
    <div className="questionBox">
      <h2>{questions[currentQuestion].questionText}</h2>
      <button onClick={checkAnswerButtonClick}>
        {questions[currentQuestion].answerOptions[0].answerText}
      </button>
      <button onClick={checkAnswerButtonClick}>
        {questions[currentQuestion].answerOptions[1].answerText}
      </button>
      <button onClick={checkAnswerButtonClick}>
        {questions[currentQuestion].answerOptions[2].answerText}
      </button>
      <button onClick={checkAnswerButtonClick}>
        {questions[currentQuestion].answerOptions[3].answerText}
      </button>
    </div>
  );
}

export default Question;
