import React from "react";
import { Card } from "semantic-ui-react";
import "../VerticalCarousel/VerticalCarouselPhone.css";

const VerticalCarouselPhone = (props) => {
  const styleCalculation = (cardIndex) => {
    const scaleValue = (cardIndex - props.carouselIndex) * 0.25;

    // Preset cards
    if (
      (cardIndex === 0 && props.carouselIndex === 0) ||
      (cardIndex === 1 && props.carouselIndex + 1 === 1)
    ) {
      return {
        transform: `scale(${1 - scaleValue}) `,
        opacity: 1 - scaleValue,
      };
    } else if (cardIndex === 2 && props.carouselIndex + 2 === 2) {
      return {
        transform: `scale(${1 - scaleValue}) translateY(-20px)`,
        opacity: 1 - scaleValue,
      };

      // Movement of cards
    } else if (props.carouselIndex === cardIndex && cardIndex > 1) {
      return {
        transform: `scale(${1 - scaleValue}) translateY(-120px)`,
        opacity: 1 - scaleValue,
      };
    } else if (props.carouselIndex === cardIndex && cardIndex === 1) {
      return {
        transform: `scale(${1 - scaleValue}) translateY(-60px)`,
        opacity: 1 - scaleValue,
      };
    } else if (cardIndex === props.carouselIndex + 1) {
      return {
        transform: `scale(${1 - scaleValue}) translateY(-80px)`,
        opacity: 1 - scaleValue,
      };
    } else if (cardIndex === props.carouselIndex + 2) {
      return {
        transform: `scale(${1 - scaleValue}) translateY(-20px)`,
        opacity: 1 - scaleValue,
      };
    } else if (props.carouselIndex > cardIndex && cardIndex > 1) {
      return {
        transform: `translateY(-120px)`,
        opacity: 0,
      };
    } else if (props.carouselIndex > cardIndex && cardIndex === 1) {
      return {
        transform: `translateY(-60px)`,
        opacity: 0,
      };
    } else {
      return {
        opacity: 0,
      };
    }
  };

  return (
    <div className="Vertical-Carousel-Container">
      {props.content.map((content, index) => (
        <Card
          key={index}
          className="Carousel-Card"
          content={content}
          style={styleCalculation(index)}
        />
      ))}
    </div>
  );
};

export default VerticalCarouselPhone;
