// test-utils.ts
import React, { ReactElement } from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import triviaReducer from "../../store/triviaReducer";

const customRender = (
  ui: ReactElement,
  preloadedState: {},
  store = configureStore({
    reducer: triviaReducer,
    preloadedState,
  }),
  ...renderOptions: any
) => {
  const Wrapper = ({ children }: any): ReactElement => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { customRender as render };
