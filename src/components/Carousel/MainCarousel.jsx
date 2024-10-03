import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useGlobalContext } from '../../context.'; 
import carrossel1 from "../../images/carrossel/biografia.jpg";
import carrossel2 from "../../images/carrossel/classicos.jpg";
import carrossel3 from "../../images/carrossel/literaturainfantil.jpg";

const CarouselComponent = () => {
    const { isDarkMode } = useGlobalContext();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    const images = [         
        {
            url: carrossel1,
            link: "http://localhost:3000/category/biography"
        },
        {
            url: carrossel2,
            link: "http://localhost:3000/category/fantasy"
        },
        {
            url: carrossel3,
            link: "http://localhost:3000/category/children"
        }
    ];

    return (
        <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
            <Slider {...settings}>
                {images.map((item, index) => (
                    <div className='carrosel' key={index}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={item.url} 
                                alt={`Slide ${index + 1}`} 
                                style={{ width: '100%', height: '300px', objectFit: 'contain' }} 
                            />
                        </a>
                    </div>
                ))}
            </Slider>
            <br></br>
        </div>
        
    );
};

export default CarouselComponent;
