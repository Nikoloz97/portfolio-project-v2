import React from "react";
import { Menu, MenuItem } from "semantic-ui-react";

const Navbar = () => {
  return (
    <div>
      <Menu className="Navbar">
        <MenuItem>
          <a href={`/`}>Home</a>
        </MenuItem>
        <MenuItem>
          <a href={`/about`}>About</a>
        </MenuItem>
        <MenuItem>
          <a href={`/contact`}>Contact</a>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
