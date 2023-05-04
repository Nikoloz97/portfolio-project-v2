import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home/Home";
import ErrorPage from "./Error-page";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Calculator from "./Projects/Calculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  // TODO: Child route not working (see comment below)
  {
    path: "projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "projects/calculator",
    //     element: <Calculator />,
    //     errorElement: <ErrorPage />,
    //   },
    // ],
  },
  {
    path: "projects/calculator",
    element: <Calculator />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
