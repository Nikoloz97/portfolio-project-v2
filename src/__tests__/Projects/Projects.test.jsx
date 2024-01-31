import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Projects from "../../Projects/Projects";
import { MemoryRouter } from "react-router-dom";

describe("Projects", () => {
  it("Projects component produces intro card on rendered", () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    // introText
    expect(screen.getByText("Projects")).toBeInTheDocument();
    // left arrow button (disabled)
    expect(screen.getByTestId("intro-left-arrow-button")).toHaveAttribute(
      "disabled"
    );

    // right arrow button (not disabled)
    expect(screen.getByTestId("intro-right-arrow-button")).not.toHaveAttribute(
      "disabled"
    );
  });

  it("Selecting right arrow button goes to next card", () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    // click rightArrow
    const rightArrowButton = screen.getByTestId("intro-right-arrow-button");

    fireEvent.click(rightArrowButton);

    // assert first project card
    expect(screen.getByText("Kronos")).toBeInTheDocument();

    // assert left and right buttons are not disabled
    expect(rightArrowButton).not.toHaveAttribute("disabled");
    const leftArrowButton = screen.getByTestId("intro-left-arrow-button");

    expect(leftArrowButton).toHaveAttribute("disabled");
  });
});
