import React from 'react';
import videoBg from '../../assets/xyz.webm';
import '../../Components/index.css';
import '../../Components/index2.css';
// import AnimatedText from './AnimatedText'; // Import AnimatedText component from its file

function AnimatedText() {
    return (
      <div className="animated-text">
        <div className="line" style={{ color: '#ff5733', fontSize: '60px' }}>Welcome </div><br />
        <div className="line" style={{ color: '#ffca28', fontSize: '80px' }}>To</div><br /><br />
        <div className="line" style={{ color: '#4caf50', fontSize: '100px' }}>VIT-BHOPAL</div><br /><br />
        <div className="line" style={{ color: '#03a9f4', fontSize: '70px' }}>EVENTS</div><br />
      </div>
    );
  }
const video = () => {
  return (
    <div className='main'>
      <video src={videoBg} autoPlay loop muted />
      <div className="overlay"></div>
      <AnimatedText /> {/* Render the AnimatedText component */}
    </div>
  );
}

export default video;
