import { useState } from "react";

const Carousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        Previous
      </button>
      <div className="carousel-content">
        <img
          src={reviews[currentIndex].image}
          alt={`Review ${currentIndex + 1}`}
          className="carousel-image"
        />
        <p className="carousel-review-text">{reviews[currentIndex].text}</p>
        <h3>{reviews[currentIndex].name}</h3>
        <h4>{reviews[currentIndex].position}</h4>
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
