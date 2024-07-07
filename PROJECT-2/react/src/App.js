import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';
import YourProfile from './pages/yourprofile/yourprofile';
import Eventdetails from './pages/yourprofile/eventdetails';
import PaymentDetails from './pages/yourprofile/paymentdetails';
import Addetails from './pages/yourprofile/adddetails';
import Paynow from './pages/yourprofile/paynow';
import Formpage from './pages/yourprofile/formpage'; // Import Formpage component
import Verifydetails from './pages/yourprofile/verifydetails';
const App = () => {
  return (
    <Router>  
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/your-profile" element={<YourProfile />} /> 
          <Route path="/event-details" element={<Eventdetails />} />{/* Add route for YourProfile */}
          <Route path="/pay" element={<Paynow />} />
          <Route path="/form-page" element={<Formpage />} /> {/* Add route for Formpage */}

          <Route path="/add-details" element={<Addetails />} />
          <Route path="/VERIFY-DETAILS" element={<Verifydetails />} />

          <Route path="*" element={<Navigate to="/" />} /> {/* Catch-all route for 404 */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
