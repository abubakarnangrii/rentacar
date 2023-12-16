import React, { useState, useEffect } from 'react';
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
        {
            path: 'assets/images/slider/slide_1.jpg',
            title: 'Title 1',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id velit vel urna vehicula fringilla.'
        },
        {
            path: 'assets/images/slider/slide_2.jpg',
            title: 'Title 2',
            paragraph: 'Sed ac quam ut libero fermentum euismod. Nulla facilisi. Vestibulum eu tristique velit.'
        },
        {
            path: 'assets/images/slider/slide_3.jpg',
            title: 'Title 3',
            paragraph: 'Praesent bibendum nunc ut odio vestibulum, ac volutpat sapien semper. Suspendisse potenti.'
        },
        // Add more image paths, titles, and paragraphs as needed
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex]);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-item">
                        <img src={image.path} alt={`Slide ${index + 1}`} />
                        <h2 className="image-title">{image.title}</h2>
                        <p className="image-paragraph">{image.paragraph}</p>
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
