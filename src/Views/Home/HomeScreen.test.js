import React from "react";
import { render } from "@testing-library/react";

import HomeScreen from "./HomeScreen";

describe("HomeScreen", () => {
  test("Renders with text", () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText("About Me")).toBeTruthy();
  });
});
