import React, { useState } from 'react';
import './qr.css';
import QRCode from "react-qr-code";

const Qr = () => {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    // Here you can add logic for handling the form submission, such as generating QR code, sending data to the server, etc.
  }

  return (
    <div className='App'>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YOUR EVENT TICKET</h1>
      <form onSubmit={handleSubmit}>
        <QRCode value={text} />

        <div className='input-here'>
          <br></br><br></br>
        <input type='text' placeholder=" Enter your Name" /><br></br><br></br>
          <input type='text' placeholder="Transaction Id" value={text} onChange={handleChange} />
          
        </div>

        <button className='bn' type="submit">TICKET </button>
        
      </form>
    </div>
  );
}

export default Qr;
