import React from "react";
import data from "../data";

function Question() {
  function checkAnswer() {
    console.log("checking the answer");
  }

  const [questions, setQuestions] = React.useState(data);
  const currentQuestion = questions[0];
  let counter = 0;

  return (
    <div className="questionBox">
      <h2>{questions[counter].question}</h2>
      <button onClick={checkAnswer}>{questions[counter].answer1}</button>
      <button onClick={checkAnswer}>{questions[counter].answer2}</button>
      <button onClick={checkAnswer}>{questions[counter].answer3}</button>
      <button onClick={checkAnswer}>{questions[counter].answer3}</button>
    </div>
  );
}

export default Question;
