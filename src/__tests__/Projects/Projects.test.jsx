import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Projects from "../../Projects/Projects";
import { MemoryRouter } from "react-router-dom";

describe("Projects", () => {
  it("on render, produces intro card", () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByTestId("intro-left-arrow-button")).toHaveAttribute(
      "disabled"
    );
    expect(screen.getByTestId("intro-right-arrow-button")).not.toHaveAttribute(
      "disabled"
    );
  });

  it("on render, left arrow button is disabled while right is not", () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByTestId("intro-left-arrow-button")).toHaveAttribute(
      "disabled"
    );
    expect(screen.getByTestId("intro-right-arrow-button")).not.toHaveAttribute(
      "disabled"
    );
  });

  it("selecting right arrow button goes to next card", () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    const rightIntroArrowButton = screen.getByTestId(
      "intro-right-arrow-button"
    );

    fireEvent.click(rightIntroArrowButton);

    expect(screen.getByText("Kronos")).toBeInTheDocument();
  });

  it("selecting right arrow button displays right project arrow button and is not disabled", async () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    const rightIntroArrowButton = screen.getByTestId(
      "intro-right-arrow-button"
    );

    fireEvent.click(rightIntroArrowButton);

    await waitFor(() => {
      const rightProjectArrowButton = screen.getByTestId(
        "project-right-arrow-button"
      );
      expect(rightProjectArrowButton).not.toHaveAttribute("disabled");
    });
  });
});
