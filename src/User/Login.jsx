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
import { apiUserRoot } from "../Helpers";

const Login = () => {
  const { setUser } = useUserContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorShowing, setIsErrorShowing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .get(apiUserRoot + `/${username}/${password}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
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
        <p>Welcome to the login page</p>
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
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
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
