import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="Default-Page">
        <p>Welcome to my porfolio page</p>
        <p>Test 4</p>
        <div>
          <Button as={Link} to="/login">
            Log in
          </Button>
          <Button as={Link} to="/signup">
            Sign up
          </Button>
        </div>
      </header>
    </>
  );
};

export default Home;
