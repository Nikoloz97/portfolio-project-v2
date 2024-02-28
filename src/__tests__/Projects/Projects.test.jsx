import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import Projects from "../../Projects/Projects";
import { MemoryRouter } from "react-router-dom";

describe("Projects", () => {
  it("renders correctly", () => {
    const projectsPage = renderer
      .create(
        <MemoryRouter>
          <Projects />
        </MemoryRouter>
      )
      .toJSON();
    expect(projectsPage).toMatchSnapshot();
  });

  it("on render, produces intro card", () => {
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

  it("on render, left arrow button is disabled while right is not", () => {
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
      screen.getByRole("button", { name: "Next project" })
    ).not.toHaveAttribute("disabled");
  });

  it("selecting right arrow button goes to next card", () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );

    const rightIntroArrowButton = screen.getByRole("button", {
      name: "Next project",
    });

    userEvent.click(rightIntroArrowButton);

    expect(screen.getByText("Kronos")).toBeInTheDocument();
  });

  it("selecting right arrow button displays right project arrow button and is not disabled", async () => {
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

      expect(rightProjectArrowButton).not.toHaveAttribute("disabled");
    });
  });
});
