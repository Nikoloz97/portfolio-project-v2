import React, { useEffect } from "react";
import { Card } from "semantic-ui-react";
import "../VerticalCarousel/VerticalCarouselDesktop.css";

const VerticalCarousel = (props) => {
  useEffect(() => {
    if (props.touchStartY && props.touchEndY && props.touchMove) {
      if (props.touchStartY > props.touchEndY) {
        handleSwipeUp();
      } else if (props.touchStartY < props.touchEndY) {
        handleSwipeDown();
      }
    }
  }, [props.touchEndY]);

  // Reset everything
  useEffect(() => {
    if (props.touchStartY && props.touchEndY && props.touchMove) {
      props.setTouchStartY(null);
      props.setTouchEndY(null);
      props.setTouchMove(null);
      props.setIsTouchingCarousel(false);
    }
  }, [props.carouselIndex]);

  // Prevent scroll-down of homepage when in vertical carousel container
  useEffect(() => {
    const handleTouchMove = (e) => {
      if (props.isTouchingCarousel) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchmove", handleTouchMove, {
        passive: true,
      });
    };
  }, [props.isTouchingCarousel]);

  const handleSwipeUp = () => {
    const deltaY = props.touchStartY - props.touchEndY;
    const sensitivity = 50;

    if (deltaY > sensitivity) {
      handleNext();
    }
  };

  const handleSwipeDown = () => {
    const deltaY = props.touchEndY - props.touchStartY;
    const sensitivity = 50;

    if (deltaY > sensitivity) {
      handlePrev();
    }
  };

  const handleNext = () => {
    if (props.carouselIndex < props.carouselContent.length - 1) {
      props.setCarouselIndex(
        (prevIndex) => (prevIndex + 1) % props.carouselContent.length
      );
    }
  };

  const handlePrev = () => {
    if (props.carouselIndex > 0) {
      props.setCarouselIndex(
        (prevIndex) =>
          (prevIndex - 1 + props.carouselContent.length) %
          props.carouselContent.length
      );
    }
  };

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
        transform: `scale(${1 - scaleValue}) translateY(-85px)`,
        opacity: 1 - scaleValue,
      };
    } else if (props.carouselIndex === cardIndex && cardIndex === 1) {
      return {
        transform: `scale(${1 - scaleValue}) translateY(-40px)`,
        opacity: 1 - scaleValue,
      };
    } else if (cardIndex === props.carouselIndex + 1) {
      return {
        transform: `scale(${1 - scaleValue}) translateY(-60px)`,
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
      // pointerEvents = prevents click-ability
      return {
        transform: `translateY(-60px)`,
        opacity: 0,
        pointerEvents: "none",
      };
    } else {
      return {
        opacity: 0,
        pointerEvents: "none",
      };
    }
  };
  return (
    <div>
      {props.content.map((content, index) => (
        <Card
          key={index}
          className="Carousel-Card"
          content={content}
          style={styleCalculation(index)}
          onClick={() => {
            props.handleCardClick(index);
          }}
          id="Carousel-Card-Desktop"
        />
      ))}
    </div>
  );
};

export default VerticalCarousel;
