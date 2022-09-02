import React from "react";
import "./App.css";
import Header from "./components/Header";
import DontReadMe from "./components/DontReadMe";
import MainContent from "./components/MainContent";
import Score from "./components/Score";

function ScoreHandler() {
  setScore((prevValue) => {
    return !prevValue;
  });
}

function App() {
  const [score, setScore] = React.useState(false);
  return (
    <div className="App">
      <Header />
      <DontReadMe />
      <div className="parentContainer">
        {score === true ? <Score /> : <MainContent score={ScoreHandler} />}
      </div>
    </div>
  );
}

export default App;
