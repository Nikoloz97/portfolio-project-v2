import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <header className="Default-Page">
        <p>Welcome to the login page</p>
        <p>New user?</p>
        <Button as={Link} to="/signUp">
          Sign up
        </Button>
      </header>
    </>
  );
};

export default Login;
