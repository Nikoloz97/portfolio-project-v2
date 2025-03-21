/**
 * Function to lazy load a background image when an element enters the viewport
 * @param {HTMLElement} element - DOM element to apply the background to
 * @param {string} imageUrl - URL of the image to lazy load
 * @returns {function} - Cleanup function to disconnect the observer
 */
const lazyLoadBackgroundImage = (element, imageUrl) => {
  if (!element) return () => {};

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const bgImg = new Image();

      bgImg.onload = function () {
        if (element) {
          element.style.backgroundImage = `url(${imageUrl})`;
        }
      };

      bgImg.src = imageUrl;
      observer.disconnect();
    }
  });

  observer.observe(element);

  return () => {
    if (observer) observer.disconnect();
  };
};

export default lazyLoadBackgroundImage;
