import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "../VerticalCarousel/VerticalCarouselDesktop.css";

const VerticalCarouselButtons = (props) => {
  const handleNext = () => {
    if (props.content.length > props.content.length - 1) {
      props.setIndex((prevIndex) => (prevIndex + 1) % props.content.length);
    }
  };

  const handlePrev = () => {
    if (props.index > 0) {
      props.setIndex(
        (prevIndex) =>
          (prevIndex - 1 + props.content.length) % props.content.length
      );
    }
  };

  return (
    <div className="Carousel-Buttons">
      <Button
        disabled={props.index === 0}
        className="Carousel-Button"
        onClick={handlePrev}
      >
        <Icon name="angle up" size="big" className="Carousel-Button-Icon" />
      </Button>

      <Button
        disabled={props.index === props.content.length - 1}
        className="Carousel-Button"
        onClick={handleNext}
      >
        <Icon name="angle down" size="big" className="Carousel-Button-Icon" />
      </Button>
    </div>
  );
};

export default VerticalCarouselButtons;
