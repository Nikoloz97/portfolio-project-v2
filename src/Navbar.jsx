import React from "react";
import { Menu, MenuItem, Button, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={15}>
            <Menu className="Navbar">
              <MenuItem as={Link} to="/">
                <Button>Home</Button>
              </MenuItem>
              <MenuItem as={Link} to="/about">
                <Button>About</Button>
              </MenuItem>
              <MenuItem as={Link} to="/projects">
                <Button>Projects</Button>
              </MenuItem>
              <MenuItem as={Link} to="/forum">
                <Button>Forum</Button>
              </MenuItem>
              <MenuItem as={Link} to="/contact">
                <Button>Contact</Button>
              </MenuItem>
            </Menu>
          </Grid.Column>

          <Grid.Column width={1} className="Avatar">
            <Image
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
              as={Link}
              to="/login"
              avatar
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Navbar;
