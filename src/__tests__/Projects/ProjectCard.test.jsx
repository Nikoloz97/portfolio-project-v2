import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectCard from "../../Projects/ProjectCard/ProjectCard";
import { MemoryRouter } from "react-router-dom";

const introMockProps = {
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

const kronosMockProps = {
  projectData: {
    title: "Kronos",
    mediaUrl: "../../Images/Projects/Kronos2.jpg",
    mediaCaption: "This is a description about the clocks project",
    linkUrl: "/projects/kronos",
  },
  projectsDataLength: 1,
  currentProjectIndex: 1,
  goToNextProject: jest.fn(),
  goToPrevProject: jest.fn(),
};

describe("Project Card", () => {
  it("Renders with intro card", () => {
    render(
      <MemoryRouter>
        <ProjectCard {...introMockProps} />
      </MemoryRouter>
    );

    expect(screen.queryByText("Projects")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Kronos" })).toBeInTheDocument();
  });

  it("Renders with kronos project card", () => {
    render(
      <MemoryRouter>
        <ProjectCard {...kronosMockProps} />
      </MemoryRouter>
    );

    expect(screen.queryByTestId("project-card-image")).toBeInTheDocument();
  });
});
