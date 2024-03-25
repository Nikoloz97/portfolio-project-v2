import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Projects from "../../Projects/Projects";
import { MemoryRouter } from "react-router-dom";

describe("Projects", () => {
  it("produces intro card where prev/next buttons are disabled/enabled, respectively", () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Previous project" })
    ).toHaveAttribute("disabled");
    expect(
      screen.getByRole("button", {
        name: "Next project",
      })
    ).not.toHaveAttribute("disabled");
  });

  it("selecting right arrow button goes to next card and right arrow button is not disabled", async () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    const rightIntroArrowButton = screen.getByRole("button", {
      name: "Next project",
    });

    userEvent.click(rightIntroArrowButton);

    await waitFor(() => {
      const rightProjectArrowButton = screen.getByRole("button", {
        name: "Next project",
      });

      expect(screen.getByText("Kronos")).toBeInTheDocument();
      expect(rightProjectArrowButton).not.toHaveAttribute("disabled");
    });
  });
});
