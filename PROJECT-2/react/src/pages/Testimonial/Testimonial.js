import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testiminol.css';
import images from '../../assets/image.png';

const Services = () => {
  return (
    <div className='routes'>
      <div className="bar">
        <h1></h1>
        <img src={images} alt="image" />
        <Link to="/your-profile">
          <h2>&nbsp; Profile</h2>
        </Link>
        <Link to="/add-details">
          <h2>&nbsp;Add Events</h2>
        </Link>
        {/* <Link to="/payment-details"> */}
          <h2>&nbsp;Order Details </h2>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Services;
