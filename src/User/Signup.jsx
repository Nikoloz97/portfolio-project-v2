import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Grid, Container, Header, Icon } from "semantic-ui-react";
import { UserErrorMessage } from "../Utils/Error/Error";
import { Link } from "react-router-dom";
import { apiUserRoot } from "../Utils/ApiRoutes";
import { useUserContext } from "../UserContext";
import "./User.css";

const SignUp = () => {
  const { isDesktop } = useUserContext();

  const [signUpInfo, setSignUpInfo] = useState({
    Username: null,
    Password: null,
    Email: null,
    FirstName: null,
    LastName: null,
    ProfileImageFile: null,
    Bio: null,
  });
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  const [profilePhotoDisplayText, setProfilePhotoDisplayText] = useState(
    "Click here to choose a file"
  );

  const [isProfilePhotoClearingDisabled, setIsProfilePhotoClearingDisabled] =
    useState(true);

  const [error, setError] = useState({
    isErrorShowing: false,
    errorMessage: "",
    errorTopic: "",
  });

  const handleFileInput = (e) => {
    setSignUpInfo({
      ...signUpInfo,
      ProfileImageFile: e.target.files[0],
    });

    if (e.target.files.length !== 0) {
      setProfilePhotoDisplayText(`File Chosen: ${e.target.files[0].name}`);
      setIsProfilePhotoClearingDisabled(false);
    }
  };

  const handleProfilePhotoClearing = () => {
    setSignUpInfo({
      ...signUpInfo,
      ProfileImageFile: null,
    });

    setProfilePhotoDisplayText("Click here to choose a file");

    setIsProfilePhotoClearingDisabled(true);
  };

  const handleSignUp = () => {
    // Formdata = needed to save profileImage on backend
    let formData = new FormData();
    formData.append("Username", signUpInfo.Username);
    formData.append("Password", signUpInfo.Password);
    formData.append("Email", signUpInfo.Email);
    formData.append("FirstName", signUpInfo.FirstName);
    formData.append("LastName", signUpInfo.LastName);
    formData.append("Bio", signUpInfo.Bio);

    if (signUpInfo.ProfileImageFile) {
      formData.append("ProfileImageFile", signUpInfo.ProfileImageFile);
    }

    axios
      .post(apiUserRoot, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);

        setProfileImageUrl(response.data.profileURL);
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
        <Grid className={isDesktop ? "Signup-Width-Desktop" : ""}>
          <Grid.Column textAlign="center">
            <Header style={{ color: "white" }}>Sign Up</Header>
            <Form>
              <Form.Group widths="equal" style={{ marginTop: "10px" }}>
                <Form.Input
                  label="*Username"
                  onChange={(e) =>
                    setSignUpInfo({ ...signUpInfo, Username: e.target.value })
                  }
                />
                <Form.Input
                  label="*Password"
                  onChange={(e) =>
                    setSignUpInfo({ ...signUpInfo, Password: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group widths="equal" style={{ marginTop: "10px" }}>
                <Form.Input
                  fluid
                  label="First name"
                  onChange={(e) =>
                    setSignUpInfo({ ...signUpInfo, FirstName: e.target.value })
                  }
                />
                <Form.Input
                  fluid
                  label="Last name"
                  onChange={(e) =>
                    setSignUpInfo({ ...signUpInfo, LastName: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group widths="equal" style={{ marginTop: "10px" }}>
                <Form.Input
                  fluid
                  label="*Email"
                  onChange={(e) =>
                    setSignUpInfo({ ...signUpInfo, Email: e.target.value })
                  }
                />
                <Form.Field>
                  <label>Profile Photo</label>

                  <div style={{ display: "flex" }}>
                    <Button
                      basic
                      as="label"
                      htmlFor="fileInput"
                      className="Signup-File-Input-Button"
                    >
                      {profilePhotoDisplayText}
                    </Button>
                    <input
                      id="fileInput"
                      type="file"
                      onChange={(e) => handleFileInput(e)}
                      style={{ display: "none" }}
                    />
                    <Button
                      className="Profile-Photo-Cancel-Button"
                      onClick={handleProfilePhotoClearing}
                      disabled={isProfilePhotoClearingDisabled}
                    >
                      <Icon name="cancel"></Icon>
                    </Button>
                  </div>
                </Form.Field>
              </Form.Group>

              <Form.TextArea
                label="Bio"
                placeholder="Write a sentence about yourself..."
                onChange={(e) =>
                  setSignUpInfo({ ...signUpInfo, Bio: e.target.value })
                }
              />

              <Grid textAlign="center" style={{ marginTop: "1rem" }}>
                <Grid.Row>
                  <Button className="SignUp-Button" content="Preview" />
                  <Button
                    style={{ marginLeft: "1rem" }}
                    className="SignUp-Button"
                    content="Sign Up"
                    onClick={handleSignUp}
                  />
                </Grid.Row>
              </Grid>
            </Form>
            <div style={{ fontSize: "1rem", marginTop: "2rem" }}>
              <Link style={{ color: "white" }} to="/login">
                Already a user? Login here
              </Link>
            </div>
          </Grid.Column>
        </Grid>
      </Container>

      {/* Preview modal */}

      {/* <p>Preview</p>
      <Image
        src={
          profileImageUrl !== null
            ? profileImageUrl
            : "https://react.semantic-ui.com/images/wireframe/square-image.png"
        }
        size="medium"
        circular
      /> */}

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

export default SignUp;
