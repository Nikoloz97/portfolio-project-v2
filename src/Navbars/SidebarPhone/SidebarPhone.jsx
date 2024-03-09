import React, { useState, useEffect } from "react";
import { Menu, MenuItem, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./SidebarPhone.css";

const SidebarPhone = (props) => {
  const [selectionName, setSelectionName] = useState("Home");

  const handleButtonClick = (buttonName) => {
    setSelectionName(buttonName);

    setTimeout(() => {
      props.toggleSidebarVisibility();
    }, 500);
  };

  return (
    <div>
      <Menu className="Sidebar-Phone">
        <MenuItem as={Link} to="/" className={`Sidebar-Button-Container`}>
          <Button
            className="Sidebar-Button"
            onClick={() => handleButtonClick("Home")}
            content="Home"
          />
        </MenuItem>
        <MenuItem as={Link} to="/blog" className={`Sidebar-Button-Container`}>
          <Button
            className="Sidebar-Button"
            onClick={() => handleButtonClick("Blog")}
            content="Blog"
          />
        </MenuItem>
        <MenuItem
          as={Link}
          to="/projects"
          className={`Sidebar-Button-Container`}
        >
          <Button
            className="Sidebar-Button"
            onClick={() => handleButtonClick("Projects")}
            content="Projects"
          ></Button>
        </MenuItem>
        <MenuItem as={Link} to="/forum" className={`Sidebar-Button-Container`}>
          <Button
            className="Sidebar-Button"
            onClick={() => handleButtonClick("Forum")}
            content="Forum"
          />
        </MenuItem>
        <MenuItem
          as={Link}
          to="/contact"
          className={`Sidebar-Button-Container`}
        >
          <Button
            className="Sidebar-Button"
            onClick={() => handleButtonClick("Contact")}
            content="Contact"
          />
        </MenuItem>
        <div className={`Sidebar-Phone-Selection-Bar ${selectionName}`} />
      </Menu>
    </div>
  );
};

export default SidebarPhone;
