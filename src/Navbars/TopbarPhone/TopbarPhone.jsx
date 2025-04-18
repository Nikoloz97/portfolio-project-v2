import React, { useState, useEffect } from "react";
import { Menu, MenuItem, Button, Icon, Image, Header } from "semantic-ui-react";
import { useUserContext } from "../../UserContext";
import { Link, useNavigate } from "react-router-dom";
import borjgaliImage from "../../Images/Logo/Borjgali_White.png";
import "./TopbarPhone.css";

const TopbarPhone = (props) => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrolled) {
      const delayShowing = setTimeout(() => {
        setShow(true);
      }, 20);
      return () => {
        clearTimeout(delayShowing);
      };
    } else {
      setShow(false);
    }
  }, [scrolled]);

  const redirectToHome = () => {
    props.setPhonePageSelection("Home");
    navigate("/");
  };

  return (
    <div>
      <Menu
        className={`Topbar-Phone ${scrolled ? "Scrolled" : ""} ${
          show ? "Show" : ""
        }`}
      >
        <MenuItem>
          <Button
            icon
            onClick={props.toggleSidebarVisibility}
            className="Topbar-Phone-Hamburger-Menu"
            style={{ width: "4rem" }}
          >
            <Icon name="bars"></Icon>
          </Button>
        </MenuItem>

        <Menu.Menu position="left" onClick={() => redirectToHome()}>
          <MenuItem>
            <Image src={borjgaliImage} style={{ height: "2rem" }} />
          </MenuItem>
          <MenuItem as={Link} to="/">
            <Header className="Topbar-Phone-Logo-Text">Nick's Portfolio</Header>
          </MenuItem>
        </Menu.Menu>

        <Menu.Menu
          style={{ display: "flex", alignItems: "center", margin: "1em" }}
          position="right"
        >
          {user == undefined && user == null ? (
            <div style={{ display: "flex" }}>
              <MenuItem as={Link} to="/login">
                <Button className="Topbar-Phone-User-Buttons" content="Login" />
              </MenuItem>
            </div>
          ) : (
            <Image src={user.profileURL} avatar />
          )}
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default TopbarPhone;
