import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import Button from "../../components/Button/Button";
import {
  generateQuestions,
  clearPreviousQuiz,
} from "../../store/triviaActions";
import { hasQuestions } from "../../store/selectors";

interface TriviaIProps extends RouteComponentProps {}

function Trivia(props: TriviaIProps) {
  const dispatch = useDispatch();

  // Check if trivia data is downloaded to display Start Quiz button
  const isTriviaData = useSelector(hasQuestions);

  useEffect(() => {
    // Clear previus answers
    dispatch(clearPreviousQuiz());

    // Get trivia
    dispatch(generateQuestions());
  }, [dispatch]);

  return (
    <div>
      {!isTriviaData && <div>Please wait, loading.</div>}
      {isTriviaData && (
        <Button onClick={() => props.navigate && props.navigate("/quiz")}>
          Start Quiz
        </Button>
      )}
    </div>
  );
}

export default Trivia;
