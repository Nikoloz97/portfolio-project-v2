export const introMockProps = {
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

export const kronosMockProps = {
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
