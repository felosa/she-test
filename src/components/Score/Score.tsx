import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import "./Score.scss";

interface QuizIProps extends RouteComponentProps {}

function Score(props: QuizIProps) {
  const questions: [] = useSelector((state: any) => state.trivia.questions);
  const userAnswers: [] = useSelector((state: any) => state.trivia.answers);

  // Compare answers with correct answer and take the length of corrects
  const result = questions.filter(
    (question: any, index) => question.correct_answer === userAnswers[index]
  ).length;

  return (
    <div>
      <span>
        You answered {result} out of {questions.length || 0} questions
        correctly.
      </span>
    </div>
  );
}

export default Score;
