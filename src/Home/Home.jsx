import { React } from "react";
import Welcome from "./Welcome/Welcome";
import Coding from "./Coding";
import Medicine from "./Medicine";
import Tutoring from "./Tutoring";
import { useUserContext } from "../UserContext";

import "./Home.css";

const Home = () => {
  const { isDesktop } = useUserContext();

  return (
    <>
      <div className="Home-Page">
        <Welcome />
        <Coding />
        <Medicine />
        <Tutoring />
      </div>
    </>
  );
};

export default Home;
