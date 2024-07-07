import React from 'react'
import './UserProfileCard.css'

import profile_ban from '../../assets/img5.jpg'
import QrPage from './paymentdetails';

const UserProfileCard = () => {
  return (
    <div className='upc'>
        <div className="gradiant"><img src={profile_ban} height="220px" width="1200px" alt=''/></div>
        <div className="profile-down"></div>
        <QrPage/>
        
    </div>
  )
}

export default UserProfileCard