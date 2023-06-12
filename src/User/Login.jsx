import React from "react";
import { Button, Divider, Grid, Segment, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Login = () => {
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
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                />

                <Button content="Login" primary />
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
      </header>
    </>
  );
};

export default Login;
