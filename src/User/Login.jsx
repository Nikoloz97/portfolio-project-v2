import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Grid,
  Form,
  Checkbox,
  Header,
  Container,
} from "semantic-ui-react";
import { UserErrorMessage } from "../Utils/Error/Error";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";
import { apiUserRoot } from "../Utils/ApiRoutes";
import "./User.css";

const Login = () => {
  const { setUser, setIsUserSignedIn } = useUserContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({
    isErrorShowing: false,
    errorMessage: "",
    errorTopic: "",
  });

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
        if (error.response) {
          // ExceptionMiddleware-specific error
          setError((prevError) => ({
            ...prevError,
            isErrorShowing: true,
            errorTopic: error.response.data.error.topic,
            errorMessage: error.response.data.error.message,
          }));
        } else {
          // General error
          setError((prevError) => ({
            ...prevError,
            isErrorShowing: true,
            errorMessage: error.message,
          }));
        }
      });
  };

  return (
    <div className="Default-Page">
      <Container fluid className="Login-SignUp-Container">
        <Grid style={{ width: "33%" }}>
          <Grid.Column textAlign="center">
            <Header style={{ color: "white" }}>Login</Header>
            <Form>
              <Form.Input
                icon="user"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                onFocus={(prevError) =>
                  setError(() => ({ ...prevError, isErrorShowing: false }))
                }
              />
              <Form.Input
                className="Login-Inputs"
                icon="lock"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={(prevError) =>
                  setError(() => ({ ...prevError, isErrorShowing: false }))
                }
              />
              <div className="Login-Checkbox-ForgotPassword">
                <Checkbox label="Remember Me" />
                <div>Forgot Password?</div>
              </div>
              <Button
                style={{ marginTop: "1rem" }}
                className="Login-Button"
                content="Login"
                onClick={handleLogin}
              />
            </Form>
            <Grid.Row style={{ marginTop: "1rem" }}>
              <div style={{ fontSize: "1rem" }}>
                <Link style={{ color: "white" }} to="/signup">
                  Don't have an account? Sign up here
                </Link>
              </div>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>

      {/* Error message */}
      <UserErrorMessage
        className={`Login-Error-Message ${
          error.isErrorShowing ? "Login-Fade-In-Up" : "Login-Fade-Out-Down"
        }`}
        error={error}
        onDismiss={(prevError) =>
          setError(() => ({ ...prevError, isErrorShowing: false }))
        }
      />
    </div>
  );
};

export default Login;
