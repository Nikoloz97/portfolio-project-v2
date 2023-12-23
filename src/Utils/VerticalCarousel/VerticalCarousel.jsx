import React from "react";
import { Card } from "semantic-ui-react";
import "../VerticalCarousel/VerticalCarousel.css";

const VerticalCarousel = (props) => {
  const degreeScaleOpacityAndTranslation = (degree, translation = 0) => {
    return {
      transform: `scale(${degree}) translateY(${translation}px)`,
      opacity: degree,
    };
  };
  return (
    <div className="Vertical-Carousel-Container">
      <Card
        className={`Carousel-Card ${
          props.index === 0 || props.index === 1 ? "Hide" : ""
        }`}
        style={degreeScaleOpacityAndTranslation(0.5, 20)}
      >
        {/* TODO: remove conditional? Might not need this logic anymore since we're hiding the card altogether */}
        {props.index === 0 || props.index === 1
          ? ""
          : props.content[props.index - 2]}
      </Card>
      <Card
        className={`Carousel-Card ${props.index === 0 ? "Hide" : ""}`}
        style={degreeScaleOpacityAndTranslation(0.75)}
      >
        {props.index === 0 ? "" : props.content[props.index - 1]}
      </Card>
      <Card
        className="Carousel-Card"
        style={degreeScaleOpacityAndTranslation(1)}
      >
        {props.content[props.index]}
      </Card>
      <Card
        className={`Carousel-Card ${props.index === 5 ? "Hide" : ""}`}
        style={degreeScaleOpacityAndTranslation(0.75)}
      >
        {props.index === 5 ? "" : props.content[props.index + 1]}
      </Card>
      <Card
        className={`Carousel-Card ${
          props.index === 4 || props.index === 5 ? "Hide" : ""
        }`}
        style={degreeScaleOpacityAndTranslation(0.5, -20)}
      >
        {props.index === 4 || props.index === 5
          ? ""
          : props.content[props.index + 2]}
      </Card>
    </div>
  );
};

export default VerticalCarousel;
