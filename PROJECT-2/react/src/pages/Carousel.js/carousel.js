import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Sidebar.css'; // Import CSS file

// Custom previous arrow component
const CustomPrevArrow = (props) => (
  <div {...props} className="slick-arrow custom-prev-arrow">
    &#9664; Prev
  </div>
);

// Custom next arrow component
const CustomNextArrow = (props) => (
  <div {...props} className="slick-arrow custom-next-arrow">
    Next &#9654;
  </div>
);

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className='routes'>
      <div className="sidebar">
        <h1>Services</h1>
        <Link to="/your-profile">
          <h2>Your Profile</h2>
        </Link>
        <Link to="/event-details">
          <h2>Event Details</h2>
        </Link>
        <Link to="/payment-details">
          <h2>Payment Details</h2>
        </Link>
      </div>
      <div className="routes-content">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
              <img src="https://media-net.abku.dev/logo.jpg" alt="Slide 1" />
            </div>
            <div className="w-full h-64 bg-blue-300 flex items-center justify-center">
              <img src="https://media-net.abku.dev/logo.jpg" alt="Slide 2" />
            </div>
            <div className="w-full h-64 bg-green-300 flex items-center justify-center">
              <img src="https://media-net.abku.dev/logo.jpg" alt="Slide 3" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Services;
