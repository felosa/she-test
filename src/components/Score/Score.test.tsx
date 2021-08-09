import React from "react";
import Score, {
  CORRECT_ANSWERS_DATA_TEST_ID,
  TOTAL_QUESTIONS_DATA_TEST_ID,
} from "./Score";
import { render, screen } from "./test.utils";
import {
  ANSWERS_CORRECT_2,
  ANSWERS_CORRECT_8,
  QUESTIONS,
} from "./test.constants";

test("Show when there are no questions and answers", async () => {
  render(<Score />, {
    trivia: {
      questions: [],
      answers: [],
    },
  });

  const correctAnswers = screen.getByTestId(CORRECT_ANSWERS_DATA_TEST_ID);

  const totalQuestions = screen.getByTestId(TOTAL_QUESTIONS_DATA_TEST_ID);
  expect(correctAnswers.textContent).toBe("0");
  expect(totalQuestions.textContent).toBe("0");
});

test("Show the correct class, number of answers and questions when the test is passed", async () => {
  render(<Score />, {
    trivia: {
      questions: QUESTIONS,
      answers: ANSWERS_CORRECT_8,
    },
  });

  const correctAnswers = screen.getByTestId(CORRECT_ANSWERS_DATA_TEST_ID);

  const totalQuestions = screen.getByTestId(TOTAL_QUESTIONS_DATA_TEST_ID);

  expect(correctAnswers).toHaveClass("passed");
  expect(correctAnswers.textContent).toBe("8");
  expect(totalQuestions.textContent).toBe("10");
});

test("Show the correct class, number of answers and questions when the test is not passed", async () => {
  render(<Score />, {
    trivia: {
      questions: QUESTIONS,
      answers: ANSWERS_CORRECT_2,
    },
  });

  const correctAnswers = screen.getByTestId(CORRECT_ANSWERS_DATA_TEST_ID);

  const totalQuestions = screen.getByTestId(TOTAL_QUESTIONS_DATA_TEST_ID);

  expect(correctAnswers).toHaveClass("suspended");
  expect(correctAnswers.textContent).toBe("2");
  expect(totalQuestions.textContent).toBe("10");
});
