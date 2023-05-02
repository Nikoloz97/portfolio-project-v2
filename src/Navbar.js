import React from "react";
import { Menu, MenuItem } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu className="Navbar">
      <MenuItem>Home</MenuItem>

      <MenuItem>About</MenuItem>

      <MenuItem>Contact</MenuItem>
    </Menu>
  );
};

export default Navbar;
