import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import images from "./images";

const App = () => {
  let totalSlides = 4;
  const [currentSlide, setCurrentSlide] = useState(0);

  function prevSlide() {
    currentSlide <= 0
      ? setCurrentSlide(totalSlides)
      : setCurrentSlide(currentSlide - 1);
  }

  function nextSlide() {
    currentSlide >= totalSlides
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="carousel" style={{transform:`translateX(-${currentSlide}00%)`}}>
          {images.map((image, index) => (
            <div className="item" key={index} >
              <img className="image" src={image} alt={image} />
            </div>
          ))}
        </div>
        <div className="btn-container">
          <button className="prev" onClick={prevSlide}>
            prev
          </button>
          <button className="next" onClick={nextSlide}>
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
