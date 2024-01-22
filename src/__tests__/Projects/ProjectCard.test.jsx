import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectCard from "../../Projects/ProjectCard/ProjectCard";

const mockProjectData = [
  {
    introText: "Projects",
    introSubtext:
      "Select the arrow on the right to navigate to my various projects - or click on the links below",
    linkUrls: [
      { title: "Kronos", url: "/projects/kronos" },
      { title: "Calculator", url: "/projects/calculator" },
      { title: "Geography Game", url: "/projects/geography-game" },
      {
        title: "Fantasy Basketball",
        url: "/projects/fantasy-basketball",
      },
    ],
  },
];

describe("Project Card", () => {
  it("Kronos button sends user to endpoint with header called Stopwatch", () => {
    render(
      <ProjectCard
        projectData={mockProjectData[0]}
        projectDataLength={1}
        currentProjectIndex={0}
      />
    );

    const kronosButton = screen.getByText("Kronos");
    kronosButton.click();

    expect(screen.queryByText("Stopwatch")).toBeVisible();
  });
});
