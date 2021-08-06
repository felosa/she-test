import React from "react";
import { Router } from "@reach/router";
import StartQuiz from "../../pages/StartQuiz/StartQuiz";
import Quiz from "../../pages/Quiz/Quiz";
import Results from "../../pages/Results/Results";
import "./App.scss";

function App() {
  return (
    <div className={"app"}>
      <div className="app__body">
        <div className="app__body-content">
          <Router>
            <StartQuiz path={"/"} />
            <Quiz path={"quiz"} />
            <Results path={"results"} />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
