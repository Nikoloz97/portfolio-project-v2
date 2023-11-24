import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Divider,
  Grid,
  Segment,
  Form,
  Message,
} from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";
import { apiUserRoot } from "../Utils/ApiRoutes";
import "./User.css";

const Login = () => {
  const { setUser, setIsUserSignedIn } = useUserContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorShowing, setIsErrorShowing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post(apiUserRoot + "/login", { Username: username, Password: password })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        setIsUserSignedIn(true);

        const token = response.data.token;

        localStorage.setItem("token", token);

        // Upon login, navigate to homescreen
        navigate("/");
      })
      .catch((error) => {
        const errorResponse = error.response.data.error.message;
        setIsErrorShowing(true);
        setErrorMessage(errorResponse);
      });
  };

  return (
    <>
      <header className="Default-Page">
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  onFocus={(e) => setIsErrorShowing(false)}
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={(e) => setIsErrorShowing(false)}
                />

                <Button content="Login" primary onClick={handleLogin} />
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Button
                content="Sign up"
                icon="signup"
                size="big"
                as={Link}
                to="/signUp"
              />
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>

        {isErrorShowing && (
          <Message negative>
            <Message.Header>Invalid Credentials</Message.Header>
            <p>{errorMessage}</p>
          </Message>
        )}
      </header>
    </>
  );
};

export default Login;
