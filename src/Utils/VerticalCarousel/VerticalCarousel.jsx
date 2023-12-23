import React from "react";
import { Button } from "semantic-ui-react";

const VerticalCarousel = (props) => {
  const handleNext = () => {
    props.setIndex((prevIndex) => (prevIndex + 1) % props.content.length);
  };

  const handlePrev = () => {
    props.setIndex(
      (prevIndex) =>
        (prevIndex - 1 + props.content.length) % props.content.length
    );
  };

  return (
    <div className="Vertical-Carousel-Container">
      <div className="carousel">
        <div className="previous">
          {
            props.content[
              (props.index - 2 + props.content.length) % props.content.length
            ]
          }
        </div>
        <div className="previous">
          {
            props.content[
              (props.index - 1 + props.content.length) % props.content.length
            ]
          }
        </div>
        <div className="current">{props.content[props.index]}</div>
        <div className="upcoming">
          {props.content[(props.index + 1) % props.content.length]}
        </div>
        <div className="upcoming">
          {props.content[(props.index + 2) % props.content.length]}
        </div>
      </div>
      <div className="controls">
        <Button onClick={handlePrev}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};

export default VerticalCarousel;
