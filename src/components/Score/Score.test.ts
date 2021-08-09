import React, { ReactElement } from "react";
import { render, screen } from "./test.utils";
import Score from "./Score";

test("Show 0 answers when we pass 0 answers", async () => {
  render(<Score />);

  expect(
    screen.getByText(/You answered 0 out of 0 questions correctly./i)
  ).toBeInTheDocument();
});
