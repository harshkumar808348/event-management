// Import React and necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Define the component
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

// Render the component
ReactDOM.render(<AnimatedText />, document.getElementById('root'));