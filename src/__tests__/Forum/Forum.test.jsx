import { render, screen } from "@testing-library/react";
import Forum from "../../Forum/Forum";
import { forumProfileData } from "../Mocks/Forum/ForumMock";

describe("Forum screen", () => {
  it("renders correctly", () => {
    render(<Forum forumProfileData={forumProfileData} />);

    expect(screen.getByTestId("Forum")).toBeInTheDocument();
  });

  it("maps profile cards correctly", () => {
    render(<Forum forumProfileData={forumProfileData} />);

    expect(screen.getAllByTestId("Profile-Card")).toHaveLength(2);
  });
});
