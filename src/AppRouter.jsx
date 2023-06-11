import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar";
import Projects from "./Projects/Projects";
import Calculator from "./Projects/Calculator";
import Clocks from "./Projects/Clocks/Clocks";
import Forum from "./Forum/Forum";
import Login from "./User/Login";
import SignUp from "./User/Signup";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/calculator" element={<Calculator />} />
        <Route path="/projects/clocks" element={<Clocks />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
