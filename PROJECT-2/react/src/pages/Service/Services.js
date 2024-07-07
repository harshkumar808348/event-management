import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Sidebar.css'; // Import CSS file
import images from '../../assets/image.png'
import image1 from '../../assets/clg.jpg'
import image2 from '../../assets/college2.jpg'
import image3 from '../../assets/college3.jpg'
import image4 from '../../assets/clg9.jpg'
import image5 from  '../../assets/clg5.png'

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
  const sliderRef = useRef(null);

  // Function to change slide automatically
  const changeSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Set an interval to call changeSlide function every second
  React.useEffect(() => {
    const intervalId = setInterval(changeSlide, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
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
        <h1></h1>
        <img src={images} alt="image" />
        <Link to="/your-profile">
          <h2>&nbsp; Profile</h2>
        </Link>
        <Link to="/event-details">
          <h2>&nbsp;Event Details</h2>
        </Link>
        <Link to="/pay">
          <h2>Generate Tickets </h2>
        </Link>
      </div>
      <div className="routes-content">
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            <div className="ak">
            <img src={image1} alt="image" />
            </div>
            <div className="w-full h-full bg-blue-300 flex items-center justify-center">
            <img src={image2} alt="image" />
            </div>
            <div className="w-full h-full bg-green-300 flex items-center justify-center">
            <img src={image3} alt="image" />
            </div>
            <div className="w-full h-full bg-blue-300 flex items-center justify-center">
            <img src={image4} alt="image" />
            </div>
            <div className="w-full h-full bg-blue-300 flex items-center justify-center">
            <img src={image2} alt="image" />
            </div>
            <div className="w-full h-full bg-blue-300 flex items-center justify-center">
            <img src={image5} alt="image" />
            </div>
            <div className="w-full h-full bg-blue-300 flex items-center justify-center">
            <img src={image5} alt="image" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Services;
