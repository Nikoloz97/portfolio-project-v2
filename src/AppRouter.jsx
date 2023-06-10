import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar";
// import Projects from "./Projects/Projects";
// import Calculator from "./Projects/Calculator";
// import Clocks from "./Projects/Clocks/Clocks";
// import Forum from "./Forum/Forum";
// import Login from "./Login";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
