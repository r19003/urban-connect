
import React from 'react';
import { useState, useEffect } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [videoText, setVideoText] = useState('');
    const textArray = ['CONNECT WITH URBAN CONNECT', 'TO EXPERIENCE', 'HASSEL', 'FREE', 'TRAVEL'];
    let textIndex = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setVideoText(textArray[textIndex]);
            textIndex = (textIndex + 1) % textArray.length;
        }, 1000); // Change text every second

        return () => clearInterval(interval);
    }, [textArray]);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div>
            <Header onOpenPopup={handleOpenPopup} />
            <VideoSection videoText={videoText} />
            <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
            <TeamSection />
            <ContactForm />
            <Footer />
        </div>
    );
};

// Header Component
const Header = ({ onOpenPopup }) => {
    return (
        <header>
            <div id="logo">
                <img src="logoo.png" alt="Urban Connect Logo" style={{ width: '400px' }} />
            </div>
            <nav id="components">
                <ul>
                    <li>Booking</li>
                    <li>Dashboard</li>
                    <li>Contact Us</li>
                    <li>
  <a href='/main.html' target="_blank" rel="noopener noreferrer">Route</a>
</li>
                </ul>
            </nav>
            <div id="btn">
                <button onClick={onOpenPopup} className="sign-in-btn">Sign In</button>
            </div>
        </header>
    );
};

// Video Section Component
const VideoSection = ({ videoText }) => {
    return (
        <div id="backgroundvid">
            <video muted autoPlay loop>
                <source src="0901.mp4" type="video/mp4" />
            </video>
            <div id="vidcontent">
                <div id="vidtext">{videoText}</div>
            </div>
        </div>
    );
};

// Popup Component
const Popup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                {/* Add login/signup forms here */}
                <LoginForm />
                <SignupForm />
            </div>
        </div>
    );
};

// Login Form Component
const LoginForm = () => {
    return (
        <div id="login-form" className="formboxl">
            <div id="welc">Welcome</div>
            <div className="login">Log in to UrbanConnect</div>
            <form>
                <div className="mb-4">
                    <input type="email" className="form-input" placeholder="Email address*" required />
                </div>
                <div className="mb-4">
                    <input type="password" className="form-input" placeholder="Password*" required />
                </div>
                <div className="mb-2">
                    <a href="#">Forgot password?</a>
                </div>
                <button type="button" className="btn btn-primary">Continue</button>
                <p>Don't have an account? <a href="#" id="switch-to-signup">Sign up</a></p>
                <div id="hal flinel">
                    <div id="linel"></div>
                    <div id="orl">OR</div>
                    <div id="linel"></div>
                </div>
                <div className="google">
                    <button type="button" className="btn btn-primary"><i className="fa-brands fa-google"></i> Continue with Google</button>
                </div>
            </form>
        </div>
    );
};

// Signup Form Component
const SignupForm = () => {
    return (
        <div id="signup-form" className="formboxl">
            <div id="welc">Welcome</div>
            <div className="login">Sign-Up to UrbanConnect</div>
            <form>
                <div className="mb-4">
                    <input type="email" className="form-input" placeholder="Email address*" required />
                </div>
                <div className="mb-4">
                    <input type="password" className="form-input" placeholder="Enter Password*" required />
                </div>
                <div className="mb-4">
                    <input type="password" className="form-input" placeholder="Confirm Password*" required />
                </div>
                <div className="mb-4">
                    <input type="text" className="form-input" placeholder="Enter Blood-Group*" required />
                </div>
                <div className="mb-4">
                    <input type="text" className="form-input" placeholder="Enter Phone Number*" required />
                </div>
                <div className="mb-4">
                    <input type="text" className="form-input" placeholder="Enter Address*" required />
                </div>
                <div className="mb-4">
                    <input type="text" className="form-input" placeholder="Enter City*" required />
                </div>
                <div className="mb-4">
                    <input type="text" className="form-input" placeholder="Enter State*" required />
                </div>
                <div className="mb-2">
                    <input type="checkbox" className="form-check-input" id="rememberPassword" />
                    <label className="form-check-label" htmlFor="rememberPassword">Remember Password</label>
                </div>
                <button type="button" className="btn btn-primary">Continue</button>
                <p>Already have an account? <a href="#" id="switch-to-login">Sign-In</a></p>
                <div id="halflinel">
                    <div id="linel"></div>
                    <div id="orl">OR</div>
                    <div id="linel"></div>
                </div>
                <div className="google">
                    <button type="button" className="btn btn-primary"><i className="fa-brands fa-google"></i> Continue with Google</button>
                </div>
            </form>
        </div>
    );
};

// Team Section Component
const TeamSection = () => {
    return (
        <div className="contactinfo">
            <div className="team-section">
                <h1>OUR TEAM</h1>
                <div className="our-team">
                    <div className="team-member">
                        <div className="member-img">
                            <img src="raghav.jpg" alt="Member 1" />
                            <div className="media">
                                <div className="social-media">
                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <h3>Raghav Vashisht</h3>
                        <span>Developer</span>
                    </div>
                    <div className="team-member">
                        <div className="member-img">
                            <img src="radhika.jpg" alt="Member 2" />
                            <div className="media">
                                <div className="social-media">
                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <h3>Radhika Sharma</h3>
                        <span>Developer</span>
                    </div>
                    <div className="team-member">
                        <div className="member-img">
                            <img src="rainap.jpg" alt="Member 3" />
                            <div className="media">
                                <div className="social-media">
                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                </div>
                            </div >
                        </div>
                        <h3>Raina Arora</h3>
                        <span>Developer</span>
                    </div>
                </div>
            </div>
            <div className="map">
                <div id="loc">
                    <div style={{ width: '100%', height: '450px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751352098304!2d76.65720287536413!3d30.51608647468947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1725106767344!5m2!1sen!2sin"
                            width="530"
                            height="500"
                            style={{ border: '0' }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <div id="location">
                    We are located at Chitkara University, Punjab, India. Our office is easily accessible by public transportation and is situated in the heart of the city. If you're planning to visit us, please use the given map to get directions. We look forward to seeing you soon!
                </div>
            </div>
        </div>
    );
};

// Contact Form Component
const ContactForm = () => {
    return (
        <div id="form">
            <p><i>General Questions? Concerns?</i></p>
            <h3>Fill out the form below and our team will contact you directly:</h3>
            <div id="halfline"><hr /></div>
            <form>
                <div className="form-content">
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-content">
                    <input type="text" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-content">
                    <input type="text" id="phone" name="phone" placeholder="Your Phone" required />
                </div>
                <div className="form-content">
                    <h5>Reasons for Contacting Us</h5>
                    <div style={{ display: 'inline-block', fontSize: '20px' }}>
                        <input type="radio" id="query" name="query" checked />
                        <label for="radio" style={{ display: 'inline-block' }}>Other</label>
                        <input type="radio" style={{ display: 'inline-block' }} id="ques" name="query" />
                        <label for="radio" style={{ display: 'inline-block' }}>Questions</label>
                        <input type="radio" style={{ display: 'inline-block' }} id="service" name="query" />
                        <label for="radio" style={{ display: 'inline-block' }}>Service</label>
                    </div>
                </div>
                <div className="form-content">
                    <textarea id="message" name="message" placeholder="Your Message" required />
                </div>
                <div className="form-content">
                    <input type="submit" placeholder="Submit" />
                </div>
            </form>
        </div>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#111', color: 'white', padding: '40px 20px', textAlign: 'center', fontFamily: 'Taviraj, serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                {/* Company Info */}
                <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                    <h3 style={{ marginBottom: '10px', fontSize: '2rem' }}>Urban Connect</h3>
                    <p style={{ marginBottom: '5px' }}>Making transportation easier and more comfortable.</p>
                    <p style={{ marginBottom: '0' }}>&copy; 2024 Urban Connect. All Rights Reserved.</p>
                </div>
                {/* Quick Links */}
                <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                    <h4 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', padding: '0', margin: '0', fontSize: '1.2rem' }}>
                        <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Home</li>
                        <li style={{ marginBottom: '10px', cursor: 'pointer' }}>About</li>
                        <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Services</li>
                        <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Contact</li>
                    </ul>
                </div>
                {/* Social Media Links */}
                <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                    <h4 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Follow Us</h4>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        {/* Instagram Icon */}
                        <a href="https://www.instagram.com" target="_blank" aria-label="Instagram" style={{ color: 'white' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        {/* Twitter Icon */}
                        <a href="https://twitter.com" target="_blank" aria-label="Twitter" style={{ color: 'white' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.44 2a9.18 9.18 0 0 1-2.88 1.1 4.48 4.48 0 0 0-7.72 4.08A12.94 12.94 0 0 1 1.67 3.15 4.48 4.48 0 0 0 2.9 9.72a4.48 4.48 0 0 1-2-.55v.06A4.48 4.48 0 0 0 4.47 14a4.48 4.48 0 0 1-2 .08A4.48 4.48 0 0 0 7.55 16a9 9 0 0 1-5.6 1.92A9.36 9.36 0 0 1 1 18.92 12.94 12.94 0 0 0 7.29 21c8.45 0 13.09-7 13.09-13.09l-.01-.6A9.32 9.32 0 0 0 23 3z"></path>
                            </svg>
                        </a>
                        {/* Facebook Icon */}
                        <a href="https://www.facebook.com" target="_blank" aria-label="Facebook" style={{ color: 'white' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};



export default ContactUs;