import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "../VerticalCarousel/VerticalCarousel.css";

const VerticalCarouselButtons = (props) => {
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
    <div className="Carousel-Buttons">
      <Button className="Carousel-Button" onClick={handlePrev}>
        <Icon name="angle up" size="big" className="Carousel-Button-Icon" />
      </Button>

      <Button className="Carousel-Button" onClick={handleNext}>
        <Icon name="angle down" size="big" className="Carousel-Button-Icon" />
      </Button>
    </div>
  );
};

export default VerticalCarouselButtons;
