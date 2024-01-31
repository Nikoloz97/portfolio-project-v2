import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectCard from "../../Projects/ProjectCard/ProjectCard";
import { MemoryRouter } from "react-router-dom";

const mockProps = {
  projectData: {
    introText: "Projects",
    introSubtext:
      "Select the arrow on the right to navigate to my various projects - or click on the links below",
    linkUrls: [
      { title: "Kronos", url: "/projects/kronos" },
      { title: "Calculator", url: "/projects/calculator" },
      { title: "Geography Game", url: "/projects/geography-game" },
      { title: "Fantasy Basketball", url: "/projects/fantasy-basketball" },
    ],
  },
  projectsDataLength: 1,
  currentProjectIndex: 0,
  goToNextProject: jest.fn(),
  goToPrevProject: jest.fn(),
};

describe("Project Card", () => {
  it("Project card renders with intro card", () => {
    render(
      <MemoryRouter>
        <ProjectCard {...mockProps} />
      </MemoryRouter>
    );

    expect(screen.queryByText("Projects")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Kronos" })).toBeInTheDocument();
  });
});
