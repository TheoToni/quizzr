import "./App.css";
import Header from "./components/Header";
import DontReadMe from "./components/DontReadMe";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <DontReadMe />
      <div className="parentContainer">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
