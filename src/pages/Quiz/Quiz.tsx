import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import Question from "../../components/Question/Question";
import Button from "../../components/Button/Button";
import { getTrivialQuestions, isTriviaCompleted } from "../../store/selectors";
import "./Quiz.scss";

interface QuizIProps extends RouteComponentProps {}

function Quiz(props: QuizIProps) {
  const questions: [] = useSelector(getTrivialQuestions);

  // Check if all questions are answered to display Complete button
  const allQuestionsAnswered = useSelector(isTriviaCompleted);

  return (
    <div>
      {questions.map((q, i) => {
        return <Question questionIndex={i} key={i} />;
      })}
      <div className="complete">
        {allQuestionsAnswered && (
          <Button onClick={() => props.navigate && props.navigate("/results")}>
            Complete Quiz
          </Button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
