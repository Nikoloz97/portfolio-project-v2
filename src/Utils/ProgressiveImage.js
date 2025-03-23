import React, { useState, useEffect } from "react";

const ProgressiveImage = ({
  smallSrc,
  largeSrc,
  alt,
  className,
  onClick,
  disabled,
}) => {
  const [src, setSrc] = useState(smallSrc);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload large image
    const img = new Image();
    img.src = largeSrc;
    img.onload = () => {
      setSrc(largeSrc);
      setIsLoaded(true);
    };
  }, [largeSrc]);

  // TODO: remove this?
  // Add blur effect during transition
  // const imageStyle = {
  //   filter: isLoaded ? "blur(0)" : "blur(8px)",
  //   transition: "filter 0.5s ease-in-out",
  // };

  if (disabled) {
    return (
      <div className="Projects-Image">
        <img
          // style={imageStyle}
          className="Projects-Image-Disabled"
          alt={alt}
          src={src}
        />
        <div className="Projects-CS-Overlay">Coming Soon</div>
      </div>
    );
  }

  return (
    <img
      // style={imageStyle}
      className={className}
      alt={alt}
      src={src}
      onClick={onClick}
    />
  );
};

export default ProgressiveImage;
