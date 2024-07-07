import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './frompage.css';

const MyForm = () => {
  const [formData, setFormData] = useState({ name: '', regNo: '', transactionID: '' });
  const [error, setError] = useState(null);
  const [isDetailsMatched, setIsDetailsMatched] = useState(false);

  // Load saved form data from localStorage on component mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        const savedFormData = JSON.parse(savedData);
        setFormData(savedFormData);
      }
    } catch (err) {
      setError('Error loading form data from localStorage');
    }
  }, []);

  useEffect(() => {
    // Check if saved data matches current form data
    const isMatch = JSON.stringify(formData) === localStorage.getItem('formData');
    setIsDetailsMatched(isMatch);
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      // Save form data to localStorage
      localStorage.setItem('formData', JSON.stringify(formData));
      alert('Form data saved to localStorage!');
    } catch (err) {
      setError('Error saving form data to localStorage');
    }
  };

  const handleCheckLocalStorage = () => {
    // Check if saved data matches current form data
    const isMatch = JSON.stringify(formData) === localStorage.getItem('formData');
    setIsDetailsMatched(isMatch);
    if (!isMatch) {
      alert('Form data does not match the data in localStorage.');
    }
  };

  const handleRedirect = () => {
    if (isDetailsMatched) {
      window.location.href = '/VERIFY-DETAILS';
    } else {
      alert('Please verify your details before proceeding.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <h1>ENTER YOUR DETAILS</h1>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Registration No."
        value={formData.regNo}
        onChange={(e) => setFormData({ ...formData, regNo: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Transaction ID"
        value={formData.transactionID}
        onChange={(e) => setFormData({ ...formData, transactionID: e.target.value })}
        required
      />
      <div className="aa">
        <Link to="#" onClick={handleCheckLocalStorage} style={{ fontSize: '44px' }}>
        <button type="button" onClick={handleRedirect} style={{ fontSize: '44px' }}>
        VERIFY YOUR DETAILS
      </button>
        </Link>
      </div>
      {/* <button type="button" onClick={handleRedirect} style={{ fontSize: '44px' }}>
        VERIFY YOUR DETAILS
      </button> */}
      <button type="submit" style={{ fontSize: '10px', margin: '10px 0' }}>
        X
      </button>
    </form>
  );
};

export default MyForm;
