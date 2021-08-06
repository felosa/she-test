export const getTrivialQuestions = (state: any) => state.trivia.questions;

export const getUserAnswers = (state: any) => state.trivia.answers;

export const hasQuestions = (state: any) =>
  (state.trivia.questions && state.trivia.questions.length > 0) || false;

export const isTriviaCompleted = (state: any) => {
  return (
    state.trivia.answers.filter((a: any) => a).length ===
      state.trivia.questions.length && !state.trivia.answers.includes(null)
  );
};

export const getCurrentAnswer = (index: number) => (state: any) => {
  return state.trivia.answers[index];
};

export const getQuestion = (index: number) => (state: any) =>
  state.trivia.questions[index];
