import React from "react";
import Score, {
  CORRECT_ANSWERS_DATA_TEST_ID,
  TOTAL_QUESTIONS_DATA_TEST_ID,
} from "./Score";
import { render, screen } from "./test.utils";
import {
  ANSWERS_CORRECT_2,
  ANSWERS_CORRECT_8,
  questions,
} from "./test.constants";

test("Show 0 correct answers and 0 questions", async () => {
  render(<Score />, {
    trivia: {
      questions: [],
      answers: [],
    },
  });

  const correctAnswersQuantity = screen.getByTestId(
    CORRECT_ANSWERS_DATA_TEST_ID
  ).textContent;

  const totalQuestions = screen.getByTestId(TOTAL_QUESTIONS_DATA_TEST_ID)
    .textContent;

  expect(correctAnswersQuantity).toBe("0");
  expect(totalQuestions).toBe("0");
});

test("Show 8 correct answers and 10 questions", async () => {
  render(<Score />, {
    trivia: {
      questions: questions,
      answers: ANSWERS_CORRECT_8,
    },
  });

  const correctAnswersQuantity = screen.getByTestId(
    CORRECT_ANSWERS_DATA_TEST_ID
  ).textContent;

  const totalQuestions = screen.getByTestId(TOTAL_QUESTIONS_DATA_TEST_ID)
    .textContent;

  expect(correctAnswersQuantity).toBe("8");
  expect(totalQuestions).toBe("10");
});

test("Show 2 correct answers and 10 questions", async () => {
  render(<Score />, {
    trivia: {
      questions: questions,
      answers: ANSWERS_CORRECT_2,
    },
  });

  const correctAnswersQuantity = screen.getByTestId(
    CORRECT_ANSWERS_DATA_TEST_ID
  ).textContent;

  const totalQuestions = screen.getByTestId(TOTAL_QUESTIONS_DATA_TEST_ID)
    .textContent;

  expect(correctAnswersQuantity).toBe("2");
  expect(totalQuestions).toBe("10");
});
