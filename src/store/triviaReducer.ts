import { TRIVIA_GENERATE, QUESTION_ANSWER } from "./triviaActions";

interface TriviaReducerState {
  loading: boolean;
  questions: any[];
  error: string | null;
  answers: string[];
}

const initialState: TriviaReducerState = {
  loading: false,
  questions: [],
  error: null,
  answers: [],
};

const triviaReducer = function (state = initialState, action: any) {
  switch (action.type) {
    case TRIVIA_GENERATE.BEGIN:
      state.loading = true;
      break;
    case TRIVIA_GENERATE.SUCCESS:
      state.loading = false;
      state.questions = action.payload;
      break;
    case TRIVIA_GENERATE.ERROR:
      state.loading = false;
      state.error = action.error;
      break;
    case TRIVIA_GENERATE.CLEAR:
      state.answers = [];
      break;
    case QUESTION_ANSWER:
      state.answers[action.questionIndex] = action.answer;
  }
  return state;
};

export default triviaReducer;
