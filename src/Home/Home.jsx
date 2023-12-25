import { React } from "react";
import Welcome from "./Welcome/Welcome";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="Home-Page">
        <Welcome />
      </div>
    </>
  );
};

export default Home;
