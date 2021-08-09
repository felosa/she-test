// test-utils.ts
import React, { FC, ReactElement } from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import triviaReducer from "../../store/triviaReducer";

// const initialState: TriviaReducerState = {
//   loading: false,
//   questions: [],
//   error: null,
//   answers: [],
// };

const customRender = (
  ui: ReactElement,
  preloadedState: { answers: []; questions: [] },
  store = configureStore({
    reducer: triviaReducer,
    preloadedState,
  }),
  ...renderOptions: undefined[]
) => {
  const Wrapper = ({ children }: any) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { customRender as render };
