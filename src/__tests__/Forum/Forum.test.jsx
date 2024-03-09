import { render, screen } from "@testing-library/react";
import Forum from "../../Forum/Forum";
import { forumProfileData } from "../Mocks/Forum/ForumMock";

describe("Forum screen", () => {
  // TODO: Update this test with something else
  // it("renders button to return user back to display", () => {
  //   render(<Forum forumProfileData={forumProfileData} />);

  //   expect(
  //     screen.getByRole("button", { name: "Back to top" })
  //   ).toBeInTheDocument();
  // });

  it("properly maps to profile card images, as well as post images", () => {
    render(<Forum forumProfileData={forumProfileData} />);

    expect(screen.getAllByRole("img")).toHaveLength(4);
  });
});
