import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectCard from "../../Projects/ProjectCard/ProjectCard";
import { MemoryRouter } from "react-router-dom";
import {
  introMockProps,
  kronosMockProps,
} from "../Mocks/Projects/ProjectCardMocks";

describe("Project Card", () => {
  it("renders with intro card", () => {
    render(
      <MemoryRouter>
        <ProjectCard {...introMockProps} />
      </MemoryRouter>
    );

    expect(screen.queryByText("Projects")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Kronos" })).toBeInTheDocument();
  });

  it("renders with kronos project card", () => {
    render(
      <MemoryRouter>
        <ProjectCard {...kronosMockProps} />
      </MemoryRouter>
    );

    expect(
      screen.queryByRole("button", { name: "Go to Project" })
    ).toBeInTheDocument();
  });
});
