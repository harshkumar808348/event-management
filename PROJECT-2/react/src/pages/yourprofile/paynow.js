import React from 'react'
import { Link } from 'react-router-dom'
import './yourprofile.css'
import Image from '../../assets/paynow.jpg'

const paynow = () => {
  return (
    <>
    <h1 className="text-center" style={{ paddingTop: "8%" }}>Pay Now</h1>
    <div className='imagepay'>
      <img src={Image} alt="image" />
    </div>
    <div className="link-container">
      <Link to="/form-page" className='button'>
        <h4>Click Here To Proceed Next</h4>
      </Link>
    </div>
  </>
  
  )
}

export default paynow