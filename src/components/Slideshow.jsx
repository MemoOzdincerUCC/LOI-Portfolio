import React, { useState } from "react";

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            src: "https://i.imgur.com/FjTJfGj.jpeg",
            alt: "LOI@UCC Workshop 1",
        },
        {
            src: "https://i.imgur.com/FjTJfGj.jpeg",
            alt: "LOI@UCC Workshop 2",
        },
        {
            src: "https://i.imgur.com/FjTJfGj.jpeg",
            alt: "LOI@UCC Workshop 3",
        },
    ];

    function handlePrev() {
        setCurrentIndex(
            currentIndex === 0 ? slides.length - 1 : currentIndex - 1
        );
    }

    function handleNext() {
        setCurrentIndex(
            currentIndex === slides.length - 1 ? 0 : currentIndex + 1
        );
    }

    function handleDotClick(index) {
        setCurrentIndex(index);
    }

    return (
        <div className="slideshow-container">
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={`mySlides fade ${
                        i === currentIndex ? "active" : ""
                    }`}
                >
                    <div className="numbertext">
                        {i + 1} / {slides.length}
                    </div>
                    <img
                        src={slide.src}
                        style={{ width: "100%" }}
                        alt={slide.alt}
                    />
                    <div className="text">{slide.alt}</div>
                </div>
            ))}
            <a className="prev" onClick={handlePrev}>
                &#10094;
            </a>
            <a className="next" onClick={handleNext}>
                &#10095;
            </a>

            <div className="dot-container">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === currentIndex ? "active" : ""}`}
                        onClick={() => handleDotClick(i)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
