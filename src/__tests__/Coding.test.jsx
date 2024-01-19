import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Coding from "../Home/Coding";

describe("Coding", () => {
  it("renders text header", () => {
    render(<Coding />);

    const text = screen.getByText("Coding Test");
    expect(text).toBeInTheDocument();
  });
});
