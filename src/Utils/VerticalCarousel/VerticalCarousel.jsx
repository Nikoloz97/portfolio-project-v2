import React from "react";
import { Card } from "semantic-ui-react";
import "../VerticalCarousel/VerticalCarousel.css";

const VerticalCarousel = (props) => {
  const calculateCardPosition = (offset) => {
    const currentIndex = props.index;
    const adjustedIndex =
      (currentIndex + offset + props.content.length) % props.content.length;
    const distanceFromCenter = Math.abs(currentIndex - adjustedIndex);
    const scaleFactor = 1 - distanceFromCenter * 0.1; // Adjust the scale factor as needed

    return {
      transform: `translateY(-250%) scale(${scaleFactor})`,
    };
  };

  return (
    <div className="Vertical-Carousel-Container">
      {Array.from({ length: 5 }).map((_, i) => (
        <Card
          key={i}
          className={`Carousel-Card ${i === 2 ? "Current" : "Non-Current"}`}
          style={calculateCardPosition(i - 2)}
        >
          {
            props.content[
              (props.index + i - 2 + props.content.length) %
                props.content.length
            ]
          }
        </Card>
      ))}
    </div>
  );
};

export default VerticalCarousel;
