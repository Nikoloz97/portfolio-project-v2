import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar.jsx";
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

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
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
        <Route path="/projects/geography-game" element={<GeographyGame />} />

        <Route path="/forumPage" element={<ForumPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profilePage" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
