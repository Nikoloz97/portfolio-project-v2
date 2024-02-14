import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const InvertableButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        as={Link}
        inverted={isHovered}
        to={props.link}
        className={props.className}
      >
        {props.name}
      </Button>
    </div>
  );
};

export default InvertableButton;
