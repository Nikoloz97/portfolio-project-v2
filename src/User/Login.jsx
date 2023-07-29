import React, { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  Segment,
  Form,
  Message,
} from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const apiUserRoot = "https://localhost:7047/api/user";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorShowing, setIsErrorShowing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fetchedUser, setFetchedUser] = useState({});

  const [avatarUrl, setAvatarUrl] = useState("tacos");
  const [navbarMessage, setNavbarMessage] = useState("tacos");

  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .get(apiUserRoot + `/${username}/${password}`)
      .then((response) => {
        setFetchedUser(response.data);

        console.log(response.data);

        setAvatarUrl(response.data.profileURL);
        console.log(avatarUrl);
        // setNavbarMessage(`Welcome, ${response.data.firstName}`);

        // This navigates us to the homepage, and pass avatarUrl as a state
        // navigate.push("/", { avatarUrl });
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
