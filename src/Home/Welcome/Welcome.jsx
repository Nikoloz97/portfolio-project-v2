import React, { useState, useEffect } from "react";
import { Header, Grid, Image } from "semantic-ui-react";
import { useUserContext } from "../../UserContext";
import "./Welcome.css";

const Welcome = (props) => {
  const { user, setUser, isUserSignedIn, isDesktop } = useUserContext();

  const [displayedWelcomeTextLineOne, setDisplayedWelcomeTextLineOne] =
    useState("");
  const [displayedWelcomeTextLineTwo, setDisplayedWelcomeTextLineTwo] =
    useState("");
  const [isFirstLineComplete, setIsFirstLineComplete] = useState(false);
  const [isSecondLineComplete, setIsSecondLineComplete] = useState(false);

  useEffect(() => {
    const completeWelcomeTextLineOne = "Welcome,";

    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= completeWelcomeTextLineOne.length) {
        setDisplayedWelcomeTextLineOne(
          completeWelcomeTextLineOne.substring(0, currentIndex)
        );
        currentIndex++;
      } else {
        setIsFirstLineComplete(true);
        clearInterval(typingInterval);
        return;
      }
    }, 120);
  }, []);

  useEffect(() => {
    if (isFirstLineComplete) {
      const completeWelcomeTextLineTwo = `${
        isUserSignedIn ? user.firstName + "." : "Guest."
      }`;

      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex <= completeWelcomeTextLineTwo.length) {
          setDisplayedWelcomeTextLineTwo(
            completeWelcomeTextLineTwo.substring(0, currentIndex)
          );
          currentIndex++;
        } else {
          setIsSecondLineComplete(true);
          clearInterval(typingInterval);
          return;
        }
      }, 120);
    }
  }, [isFirstLineComplete]);

  return (
    <div>
      {/* <Image
        src={require("../../Images/Welcome/Welcome_Georgia_City1.webp")}
        centered
        // hidden={props.isLoading}
        // className={`ForumPage-Display ${
        //   props.isDisplayVisible ? "Fade-In" : ""
        // }`}
      /> */}
      <Grid style={{ width: "100vw" }}>
        <Grid.Column style={{ marginLeft: "5rem" }}>
          <Grid.Row>
            <Header
              className={`Welcome-Text ${isDesktop ? "Desktop" : "Phone"} ${
                props.isSidebarVisible ? "Sidebar-Visible" : ""
              }`}
            >
              {isFirstLineComplete ? (
                <span>{displayedWelcomeTextLineOne}</span>
              ) : (
                <span className="Typewriter-Cursor">
                  {displayedWelcomeTextLineOne}
                </span>
              )}
            </Header>
          </Grid.Row>

          <Grid.Row>
            <Header
              className={`Welcome-Text ${isDesktop ? "Desktop" : "Phone"} ${
                props.isSidebarVisible ? "Sidebar-Visible" : ""
              }
                `}
            >
              {isSecondLineComplete ? (
                <span>{displayedWelcomeTextLineTwo}</span>
              ) : (
                <span
                  className={`${
                    isFirstLineComplete ? "Typewriter-Cursor" : ""
                  }`}
                >
                  {displayedWelcomeTextLineTwo}
                </span>
              )}
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Welcome;
