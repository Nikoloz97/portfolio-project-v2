import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import ContactV2 from "./Contact/ContactV2";
import Navbar from "./Navbar";
import Projects from "./Projects/Projects.jsx";
import Calculator from "./Projects/Calculator/Calculator";
import Kronos from "./Projects/Clocks/Kronos";
import ForumDisplay from "./Forum/Display";
import Login from "./User/Login";
import SignUp from "./User/Signup";
import FantasyBasketball from "./Projects/Basketball/FantasyBasketball";
import GeographyGame from "./Projects/GeographyGame/GeographyGame";
import TeamAnalyzer from "./Projects/Basketball/TeamAnalyzer/TeamAnalyzer";
import ScheduleAnalyzer from "./Projects/Basketball/ScheduleAnalyzer/ScheduleAnalyzer";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactV2 />} />

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

        <Route path="/forum" element={<ForumDisplay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
