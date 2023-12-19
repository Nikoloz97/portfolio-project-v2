import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar, Segment } from "semantic-ui-react";
import { useUserContext } from "./UserContext.js";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import TopbarPhone from "./Navbars/TopbarPhone/TopbarPhone.jsx";
import SidebarPhone from "./Navbars/SidebarPhone/SidebarPhone.jsx";
import TopbarDesktopLayover from "./Utils/TopbarDesktopLayover.jsx";
import Projects from "./Projects/Projects.jsx";
import Calculator from "./Projects/Calculator/Calculator";
import Kronos from "./Projects/Clocks/Kronos";
import ForumPage from "./Forum/ForumPage.jsx";
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
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
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
                <TopbarDesktopLayover>
                  <Home />
                </TopbarDesktopLayover>
              }
            />
            <Route
              path="/blog"
              element={
                <TopbarDesktopLayover>
                  <Blog />
                </TopbarDesktopLayover>
              }
            />
            <Route
              path="/contact"
              element={
                <TopbarDesktopLayover>
                  <Contact />
                </TopbarDesktopLayover>
              }
            />
            <Route
              path="/projects"
              element={
                <TopbarDesktopLayover>
                  <Projects />
                </TopbarDesktopLayover>
              }
            />
            <Route
              path="/projects/calculator"
              element={
                <TopbarDesktopLayover>
                  <Calculator />
                </TopbarDesktopLayover>
              }
            />
            <Route
              path="/projects/kronos"
              element={
                <TopbarDesktopLayover>
                  <Kronos />
                </TopbarDesktopLayover>
              }
            />
            <Route
              path="/projects/fantasy-basketball"
              element={
                <TopbarDesktopLayover>
                  <FantasyBasketball />
                </TopbarDesktopLayover>
              }
            />
            <Route
              path="/projects/fantasy-basketball/team-analyzer"
              element={
                <TopbarDesktopLayover>
                  <TeamAnalyzer />
                </TopbarDesktopLayover>
              }
            />
            <Route
              path="/projects/fantasy-basketball/schedule-analyzer"
              element={
                <TopbarDesktopLayover>
                  <ScheduleAnalyzer />
                </TopbarDesktopLayover>
              }
            />
            <Route
              path="/projects/geography-game"
              element={
                <TopbarDesktopLayover>
                  <GeographyGame />
                </TopbarDesktopLayover>
              }
            />
            <Route
              path="/forumPage"
              element={
                <TopbarDesktopLayover>
                  <ForumPage />
                </TopbarDesktopLayover>
              }
            />
            <Route
              path="/login"
              element={
                <TopbarDesktopLayover>
                  <Login />
                </TopbarDesktopLayover>
              }
            />
            <Route
              path="/signup"
              element={
                <TopbarDesktopLayover>
                  <SignUp />
                </TopbarDesktopLayover>
              }
            />
            <Route
              path="/profilePage"
              element={
                <TopbarDesktopLayover>
                  <ProfilePage />
                </TopbarDesktopLayover>
              }
            />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <div className={`app-container ${isSidebarVisible ? "dimmed" : ""}`}>
            <TopbarPhone toggleSidebarVisibility={toggleSidebarVisibility} />
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
                  <Home
                    toggleSidebarVisibility={toggleSidebarVisibility}
                    isSidebarVisible={isSidebarVisible}
                  />
                }
              />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/calculator" element={<Calculator />} />
              <Route path="/projects/kronos" element={<Kronos />} />
              <Route
                path="/projects/fantasy-basketball"
                element={<FantasyBasketball />}
              />
              <Route
                path="/projects/fantasy-basketball/team-analyzer"
                element={<TeamAnalyzer />}
              />
              <Route
                path="/projects/fantasy-basketball/schedule-analyzer"
                element={<ScheduleAnalyzer />}
              />
              <Route
                path="/projects/geography-game"
                element={<GeographyGame />}
              />
              <Route path="/forumPage" element={<ForumPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profilePage" element={<ProfilePage />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default AppRouter;
