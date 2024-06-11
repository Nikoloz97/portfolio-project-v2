import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar, Segment } from "semantic-ui-react";
import { useUserContext } from "./UserContext.js";
import Home from "./Home/Home/Home.jsx";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import SidebarPhone from "./Navbars/SidebarPhone/SidebarPhone.jsx";
import TopbarLayover from "./Utils/TopbarLayover.jsx";
import Projects from "./Projects/Projects.jsx";
import Calculator from "./Projects/Calculator/Calculator";
import Kronos from "./Projects/Clocks/Kronos";
import Forum from "./Forum/Forum.jsx";
import Login from "./User/Login";
import SignUp from "./User/Signup";
import FantasyBasketball from "./Projects/Basketball/FantasyBasketball";
import GeographyGame from "./Projects/GeographyGame/GeographyGame";
import TeamAnalyzer from "./Projects/Basketball/TeamAnalyzer/TeamAnalyzer";
import ScheduleAnalyzer from "./Projects/Basketball/ScheduleAnalyzer/ScheduleAnalyzer";
import ProfilePage from "./User/ProfilePage.jsx";
import "./AppRouter.css";

function AppRouter() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const { isDesktop } = useUserContext();

  const toggleSidebarVisibility = () => {
    // Prevents modifying state of AppRouter while its in the process of rendering
    setTimeout(() => {
      setIsSidebarVisible(!isSidebarVisible);
    }, 0);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const sidebar = document.getElementById("Sidebar-Overflow"); // Replace with the actual ID of your sidebar

      if (sidebar && !sidebar.contains(event.target)) {
        toggleSidebarVisibility();
      }
    };

    if (isSidebarVisible) {
      // Click outside sidebar closes it
      document.addEventListener("click", handleDocumentClick);

      // No scrolling while sidebar open
      document.body.classList.add("no-scroll");
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.body.classList.remove("no-scroll");
    };
  }, [isSidebarVisible]);

  return (
    <>
      {isDesktop ? (
        <BrowserRouter>
          <Routes>
            <Route
              path=""
              element={
                <TopbarLayover>
                  <Home />
                </TopbarLayover>
              }
            />
            <Route
              path="/blog"
              element={
                <TopbarLayover>
                  <Blog />
                </TopbarLayover>
              }
            />
            <Route
              path="/contact"
              element={
                <TopbarLayover>
                  <Contact />
                </TopbarLayover>
              }
            />
            <Route
              path="/projects"
              element={
                <TopbarLayover>
                  <Projects />
                </TopbarLayover>
              }
            />
            <Route
              path="/projects/calculator"
              element={
                <TopbarLayover>
                  <Calculator />
                </TopbarLayover>
              }
            />
            <Route
              path="/projects/kronos"
              element={
                <TopbarLayover>
                  <Kronos />
                </TopbarLayover>
              }
            />
            <Route
              path="/projects/fantasy-basketball"
              element={
                <TopbarLayover>
                  <FantasyBasketball />
                </TopbarLayover>
              }
            />
            <Route
              path="/projects/fantasy-basketball/team-analyzer"
              element={
                <TopbarLayover>
                  <TeamAnalyzer />
                </TopbarLayover>
              }
            />
            <Route
              path="/projects/fantasy-basketball/schedule-analyzer"
              element={
                <TopbarLayover>
                  <ScheduleAnalyzer />
                </TopbarLayover>
              }
            />
            <Route
              path="/projects/geography-game"
              element={
                <TopbarLayover>
                  <GeographyGame />
                </TopbarLayover>
              }
            />
            <Route
              path="/forum"
              element={
                <TopbarLayover>
                  <Forum />
                </TopbarLayover>
              }
            />
            <Route
              path="/login"
              element={
                <TopbarLayover>
                  <Login />
                </TopbarLayover>
              }
            />
            <Route
              path="/signup"
              element={
                <TopbarLayover>
                  <SignUp />
                </TopbarLayover>
              }
            />
            <Route
              path="/profilePage"
              element={
                <TopbarLayover>
                  <ProfilePage />
                </TopbarLayover>
              }
            />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <div className={`app-container ${isSidebarVisible ? "dimmed" : ""}`}>
            <Sidebar
              className="Sidebar"
              id="Sidebar-Overflow"
              as={Segment}
              animation="push"
              direction="left"
              visible={isSidebarVisible}
            >
              <SidebarPhone toggleSidebarVisibility={toggleSidebarVisibility} />
            </Sidebar>
            <Routes>
              <Route
                path=""
                element={
                  <TopbarLayover
                    toggleSidebarVisibility={toggleSidebarVisibility}
                  >
                    <Home
                      toggleSidebarVisibility={toggleSidebarVisibility}
                      isSidebarVisible={isSidebarVisible}
                    />
                  </TopbarLayover>
                }
              />
              <Route
                path="/blog"
                element={
                  <TopbarLayover
                    toggleSidebarVisibility={toggleSidebarVisibility}
                  >
                    <Blog />
                  </TopbarLayover>
                }
              />
              <Route
                path="/contact"
                element={
                  <TopbarLayover
                    toggleSidebarVisibility={toggleSidebarVisibility}
                  >
                    <Contact />
                  </TopbarLayover>
                }
              />
              <Route
                path="/projects"
                element={
                  <TopbarLayover
                    toggleSidebarVisibility={toggleSidebarVisibility}
                  >
                    <Projects />
                  </TopbarLayover>
                }
              />
              <Route
                path="/projects/calculator"
                element={
                  <TopbarLayover
                    toggleSidebarVisibility={toggleSidebarVisibility}
                  >
                    <Calculator />
                  </TopbarLayover>
                }
              />
              <Route
                path="/projects/kronos"
                element={
                  <TopbarLayover
                    toggleSidebarVisibility={toggleSidebarVisibility}
                  >
                    <Kronos />
                  </TopbarLayover>
                }
              />
              <Route
                path="/projects/fantasy-basketball"
                element={
                  <TopbarLayover
                    toggleSidebarVisibility={toggleSidebarVisibility}
                  >
                    <FantasyBasketball />
                  </TopbarLayover>
                }
              />
              <Route
                path="/projects/fantasy-basketball/team-analyzer"
                element={
                  <TopbarLayover
                    toggleSidebarVisibility={toggleSidebarVisibility}
                  >
                    <TeamAnalyzer />
                  </TopbarLayover>
                }
              />
              <Route
                path="/projects/fantasy-basketball/schedule-analyzer"
                element={
                  <TopbarLayover
                    toggleSidebarVisibility={toggleSidebarVisibility}
                  >
                    <ScheduleAnalyzer />
                  </TopbarLayover>
                }
              />
              <Route
                path="/projects/geography-game"
                element={
                  <TopbarLayover
                    toggleSidebarVisibility={toggleSidebarVisibility}
                  >
                    <GeographyGame />
                  </TopbarLayover>
                }
              />
              <Route
                path="/forum"
                element={
                  <TopbarLayover
                    toggleSidebarVisibility={toggleSidebarVisibility}
                  >
                    <Forum />
                  </TopbarLayover>
                }
              />
              <Route
                path="/login"
                element={
                  <TopbarLayover
                    toggleSidebarVisibility={toggleSidebarVisibility}
                  >
                    <Login />
                  </TopbarLayover>
                }
              />
              <Route
                path="/signup"
                element={
                  <TopbarLayover
                    toggleSidebarVisibility={toggleSidebarVisibility}
                  >
                    <SignUp />
                  </TopbarLayover>
                }
              />
              <Route
                path="/profilePage"
                element={
                  <TopbarLayover
                    toggleSidebarVisibility={toggleSidebarVisibility}
                  >
                    <ProfilePage />
                  </TopbarLayover>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default AppRouter;
