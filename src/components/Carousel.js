import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const images = [
        'assets/images/slider/slide_1.jpg',
        'assets/images/slider/slide_2.jpg',
        'assets/images/slider/slide_3.jpg',
        // Add more image paths as needed
    ];

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-item">
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="carousel-controls">
                <button className="carousel-control1" onClick={prevSlide}>❮</button>
                <button className="carousel-control2" onClick={nextSlide}>❯</button>
            </div>
        </div>
    );
};

export default Carousel;
