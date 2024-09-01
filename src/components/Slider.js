import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./Slider.css";

export const CustomSlider = () => {
    const slides = [
        {
            title: 'gHyundai Santa Fe',
            img: 'assets/images/car_1.png',
            para: 'To be clear, the Santa Fe Sport is a 5-passenger SUV with two rows of seating, but I am testing the regular Santa Fe that is larger and has three rows of seating.' ,
            price: '120$'
        },
        {
            title: 'Porsche 911 Carrera S',
            img: 'assets/images/car_2.png',
            para: 'To be clear, the Santa Fe Sport is a 5-passenger SUV with two rows of seating, but I am testing the regular Santa Fe that is larger and has three rows of seating.',
            price:'230$'
        },
        {
            title: 'Mercedes-Benz Metris Passenger Van',
            img: 'assets/images/car_3.png',
            para: 'To be clear, the Santa Fe Sport is a 5-passenger SUV with two rows of seating, but I am testing the regular Santa Fe that is larger and has three rows of seating.',
            price:'100$'
        }
    ];
    return (
        <div className="slider-container">
            <h1 >Our Fleet</h1>
            <span className="text-link">Great Rental Car Selection. Unbeatable Deals.</span>
            {/* <Slider dots={false} infinite speed={1400} slidesToShow={1} slidesToScroll={1} autoplay autoplaySpeed={2000}>
                
                {slides.map((slide, index) => (
                    <div key={index}>
                        <h2 className="headingg">{slide.title}</h2>
                        <p className="para">{slide.para}</p>
                        <span className="cost">From <strong>{slide.price}</strong> per day</span>
                        <span className="btn btn-model123" data-remodal-target="modal">book now</span>
                        <img className="imggg" src={slide.img} alt={`car`} />
                    </div>
                ))}
            </Slider> */}
        </div>
    );
};
