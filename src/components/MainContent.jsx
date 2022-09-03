import React from "react";
import data from "../data";

function MainContent(props) {
  const checkAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      alert("this answer is correct");
      {
        props.handleClick();
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setcurrentQuestion(nextQuestion);
      isCorrect;
    } else {
      {
        props.ScorePanelHandler();
      }
    }
  };

  const [questions, setQuestions] = React.useState(data);
  const [currentQuestion, setcurrentQuestion] = React.useState(0);

  return (
    <div className="questionBox">
      <h2>{questions[currentQuestion].questionText}</h2>
      {questions[currentQuestion].answerOptions.map((answerOption) => (
        <button onClick={() => checkAnswerButtonClick(answerOption.isCorrect)}>
          {answerOption.answerText}
        </button>
      ))}
    </div>
  );
}

export default MainContent;
