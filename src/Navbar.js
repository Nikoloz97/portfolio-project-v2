import React from "react";
import { Menu, MenuItem, Button } from "semantic-ui-react";
import "./App.css";

const Navbar = () => {
  const navLinksStyle = {
    color: "black",
    padding: "10px",
    textDecoration: "none",
  };

  return (
    <div>
      <Menu className="Navbar">
        <MenuItem>
          <Button primary>
            <a style={navLinksStyle} href={`/`}>
              Home
            </a>
          </Button>
        </MenuItem>
        <MenuItem>
          <Button>
            <a style={navLinksStyle} href={`/about`}>
              About
            </a>
          </Button>
        </MenuItem>
        <MenuItem>
          <button>
            <a style={navLinksStyle} href={`/contact`}>
              Contact
            </a>
          </button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
