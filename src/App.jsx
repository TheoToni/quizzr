import React from "react";
import "./App.css";
import Header from "./components/Header";
import DontReadMe from "./components/DontReadMe";
import MainContent from "./components/MainContent";
import Score from "./components/Score";

function App() {
  const [scorePanelActive, setScorePanelActive] = React.useState(false);
  const [scoreCount, setScoreCount] = React.useState(0);

  function ScorePanelHandler() {
    setScorePanelActive((prevValue) => {
      return !prevValue;
      console.log("scorepanelhandler");
    });
  }
  function ScoreCounter() {
    setScoreCount((prevValue) => {
      return prevValue + 1;
    });
  }

  return (
    <div className="App">
      <Header />
      {!scorePanelActive ? <DontReadMe /> : ""}
      <div className="parentContainer">
        {scorePanelActive === true ? (
          <Score scoreCount={scoreCount} />
        ) : (
          <MainContent
            handleClick={ScoreCounter}
            scoreCount={scoreCount}
            ScorePanelHandler={ScorePanelHandler}
          />
        )}
      </div>
    </div>
  );
}

export default App;
