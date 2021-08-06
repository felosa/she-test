import React from "react";
import { RouteComponentProps } from "@reach/router";
import Button from "../../components/Button/Button";
import "./Results.scss";
import Score from "../../components/Score/Score";

interface ResultsIProps extends RouteComponentProps {}

function Results(props: ResultsIProps) {
  return (
    <div className="results">
      <h1>Thank You!</h1>
      <div>
        <Score />
        <Button onClick={() => props.navigate && props.navigate("/")}>
          Start New Quiz
        </Button>
      </div>
    </div>
  );
}

export default Results;
