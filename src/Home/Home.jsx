import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useUserContext } from "../UserContext";

const Home = () => {
  const { user, setUser, setIsUserSignedIn } = useUserContext();

  const handleSignOut = () => {
    setUser(null);
    setIsUserSignedIn(false);
  };

  return (
    <>
      <header className="Default-Page">
        <p>Welcome to my portfolio page</p>
        {user === undefined || user === null ? (
          <div>
            <Button as={Link} to="/login">
              Log In
            </Button>
            <Button as={Link} to="/signup">
              Sign Up
            </Button>
          </div>
        ) : (
          <div>
            <Button onClick={handleSignOut}>Sign Out</Button>
          </div>
        )}
      </header>
    </>
  );
};

export default Home;
