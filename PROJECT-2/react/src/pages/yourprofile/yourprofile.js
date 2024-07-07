import React from 'react'
import './yourprofile.css'
import Icon from '../../assets/img2.jpg'

const UserProfileCard = () => {
  return (
    <div className='upc'>
        <div className="gradiant"></div>
        <div className="profile-down"></div>
        <img src={Icon} height="200px" alt=''/>
        <div className='profile-title'>User Name</div>
        <div className="profile-description">
        An ambitious and dynamic college student at VIT, dedicated to academic excellence and actively engaged in extracurricular pursuits.
        </div>
        <div className="profile-button"><a href="mailto:anonymous@unknown.com">Contact Me</a></div>
    </div>
  )
}

export default UserProfileCard