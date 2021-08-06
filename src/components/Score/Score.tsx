import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import { getTrivialQuestions, getUserAnswers } from "../../store/selectors";
import "./Score.scss";

interface QuizIProps extends RouteComponentProps {}

function Score(props: QuizIProps) {
  const questions: [] = useSelector(getTrivialQuestions);
  const userAnswers: [] = useSelector(getUserAnswers);

  // Compare answers with correct answer and take the length of corrects
  const result: number =
    questions.filter(
      (question: any, index) => question.correct_answer === userAnswers[index]
    ).length || 0;

  return (
    <div className="score-container">
      <h2>
        You answered{" "}
        <span className={result >= 5 ? "passed" : "suspended"}>{result}</span>{" "}
        out of <span>{questions.length}</span> questions correctly.
      </h2>
    </div>
  );
}

export default Score;
