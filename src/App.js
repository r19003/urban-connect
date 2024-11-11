import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import LandingPage from './LandingPage';
import BookingPage from './BookingPage';
import ContactUs from './ContactUs';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login-signup" element={<LoginSignup />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </Router>
    );
};

export default App;