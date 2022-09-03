import React from "react";

function Score(props) {
  return (
    <div className="score">
      <p>Yes thats your SCORE</p>
      <h2>{props.scoreCount}</h2>
    </div>
  );
}

export default Score;
