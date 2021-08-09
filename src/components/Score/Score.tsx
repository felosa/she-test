import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import { getTrivialQuestions, getUserAnswers } from "../../store/selectors";
import "./Score.scss";

export const CORRECT_ANSWERS_DATA_TEST_ID = "correct-answers";
export const TOTAL_QUESTIONS_DATA_TEST_ID = "total-questions";

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
    <div id="score" className="score-container">
      <h2>
        You answered{" "}
        <span
          data-testid={CORRECT_ANSWERS_DATA_TEST_ID}
          className={result >= 5 ? "passed" : "suspended"}
        >
          {result}
        </span>{" "}
        out of{" "}
        <span data-testid={TOTAL_QUESTIONS_DATA_TEST_ID}>
          {questions.length}
        </span>{" "}
        questions correctly.
      </h2>
    </div>
  );
}

export default Score;
