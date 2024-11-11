

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './MainComponent.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
       
            <div>
              {/* Background Video Section */}
              <div className="video-section">
                <video autoPlay muted loop className="background-video">
                  <source src="0901.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
        
                {/* Updated Transparent Header */}
                <header className="transparent-header">
                  <div id="logo">
                    <img src="logoo.png" alt="Urban Connect Logo" />
                  </div>
                  <div id="components">
                    <button className="nav-toggle" aria-label="toggle navigation">&#9776;</button>
                    <ul className="nav-links">
                      <li>Dashboard</li>
                      <li>Profile</li>
                     <Link to='/booking'><li>Bookings</li></Link>
                      <li>Wallet</li>
                     <Link to='/contact-us'> <li>Support</li></Link>
                     <li>
  <a href='/main.html' target="_blank" rel="noopener noreferrer">Route</a>
</li>
                      <li><button style={{ padding: '10px', borderColor: 'transparent', borderRadius: '10px' }}>Login</button></li>
                    </ul>
                  </div>
                </header>
        
                {/* Hero Section */}
                <div className="hero-content">
                  <h2 style={{ fontSize: '4rem' }} data-aos="fade-in" data-aos-duration="3000" data-aos-delay="200">Urban Connect</h2>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <li style={{ listStyle: 'none', fontSize: '2rem' }} data-aos="fade-in" data-aos-duration="3000" data-aos-delay="1000">Hassle Free</li>
                    <li style={{ listStyle: 'none', fontSize: '2rem' }} data-aos="fade-in" data-aos-duration="3000" data-aos-delay="2000">Easy</li>
                    <li style={{ listStyle: 'none', fontSize: '2rem' }} data-aos="fade-in" data-aos-duration="3000" data-aos-delay="3000">Comfort</li>
                  </div>
                  <button style={{ padding: '20px', borderColor: 'transparent', borderRadius: '10px' }}>Let's Start</button>
                </div>
              </div>
        
              {/* Intro Section */}
              <section className="intro">
                <div className="intro-text">
                  <h6 style={{ marginBottom: '0px' }}>URBAN CONNECT</h6>
                  <p>Our project aims to develop a bus transport platform that allows users to book seats online, track buses in real-time, view estimated arrival times, check fare details, and access route information. This platform is designed to enhance convenience, improve travel planning, and provide valuable insights into bus operations.</p>
                </div>
                <div className="intro-img">
                  <img src="https://landtransportguru.net/web/wp-content/uploads/2020/04/3096-944.jpg" alt="Bus Image" />
                </div>
              </section>
        
              {/* Cloud Section */}
              <section className="cloud">
                <div className="cloud-text">
                  <h5>We value time, comfort , and quality for our clients.</h5>
                  <h1>Why</h1>
                  <h2>Choose Us?</h2>
                </div>
              </section>
        
              {/* Bus Section */}
              <div className="black-section">
                <div className="bus-container">
                  <center><img src="https://coachmanluxury.com/wp-content/uploads/2022/09/coachman-limmo-large.png" alt="Bus Image" className="bus" data-aos="fade-right" /></center>
                </div>
                <div className="content">
                  <h2>We make sure that <span>every charter</span> exceeds your expectations</h2>
                  <p>Urban Connect Transport is here to make your transportation needs seamless...</p>
                </div>
              </div>
        
              {/* Our Services */}
              <section className="circle-cards">
                <div className="cloud-text">
                  <h1 style={{ color: '#000' }}>Our Services..</h1>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <ol>
                  <li data-aos="fade-right">
                    <div className="icon"> 🚍<i className="fa-solid fa-calendar-check"></i></div>
                    <div className="title">Check Schedule</div>
                    <div className="descr">Easily view available bus schedules for your journey.</div>
                  </li>
                  <li data-aos="fade-left" style={{ background: 'url(https://i.pinimg.com/564x/2a/65/33/2a6533162ca598ccdc4299d5927f9856.jpg)', backgroundSize: 'cover' }}>
                    <div className="icon">💳<i className="fa-solid fa-ticket-alt"></i></div>
                    <div className="title">Book Tickets</div>
                    <div className="descr">Reserve your seat in just a few clicks.</div>
                  </li>
                  <li data-aos="fade-right">
                    <div className="icon">📍<i className="fa-solid fa-bus"></i></div>
                    <div className="title">Live Track</div>
                    <div className="descr">Track your bus in real-time with our live tracking feature.</div>
                  </li>
                </ol>
              </section>
        
              {/* Faltu */}
              <section className="faltu">
                <div className="faltu-text">
                  <h2>We offer </h2><h2> Simple ,Easy and Comfortable</h2>
                  <h2>Journey</h2>
                  <p>In recent years, the demand for efficient and user-friendly transportation solutions has increased significantly. With the advent of digital technology, there is a growing need for platforms that can provide seamless travel experiences. This project aims to develop a bus transport platform that allows users to book seats online, track buses in real-time, view estimated arrival times, check fare details, and access route information. This platform is designed to enhance convenience, improve travel planning, and provide valuable insights into bus operations.</p>
                </div>
                <div className="faltu-img">
                  <img src="photo.png" alt="Bus Image" />
                </div>
              </section>
        
              {/* Testimonial */}
              <section className="testmonial">
                <div className="testmonial-text">
                  <h2>Our Clients Love Us!</h2>
                  <div className="carousel">
                    <input type="radio" name="carousel" id="item-1" checked />
                    <input type="radio" name="carousel" id="item-2" />
                    <input type="radio" name="carousel" id="item-3" />
                    <input type="radio" name="carousel" id="item-4" />
                    <div className="carousel-items">
                      <label htmlFor="item-1" className="carousel-item">"Urban Connect has made my daily commute so much easier and reliable!"</label>
                      <label htmlFor="item-2" className="carousel-item">"Fast and secure booking with excellent service quality."</label>
                      <label htmlFor="item-3" className="carousel-item">"I love the real-time tracking feature, it's super helpful!"</label>
                      <label htmlFor="item-4" className="carousel-item">"The best bus service I've experienced so far!"</label>
                    </div>
                    <div className="carousel-navigation">
                      <label htmlFor="item-1" className="nav-button"></label>
                      <label htmlFor="item-2" className="nav-button"></label>
                      <label htmlFor="item-3" className="nav-button"></label>
                      <label htmlFor="item-4" className="nav-button"></label>
                    </div>
                  </div>
                </div>
              </section>
        
              {/* Footer */}
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
        
                      {/* X (Twitter) Icon */}
                      <a href="https://twitter.com" target="_blank" aria-label="Twitter" style={{ color: 'white' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.44 2a9.18 9.18 0 0 1-2.88 1.1 4.48 4.48 0 0 0-7.72 4.08A12.94 12.94 0 0 1 1.67 3.15 4.48 4.48 0 0 0 2.9 9.72a4.48 4.48 0 0 1-2-.55v.06A4.48 4.48 0 0 0 4.47 14a4.48 4.48 0 0 1-2 .08A4.48 4.48 0 0 0 7.55 16a9 9 0 0 1-5.6 1.92A9.36 9.36 0 0 1 1 18.92 12.94 12.94 0 0 0 7.29 21c8.45 0 13.09-7 13.09-13.09l-. 01-.6A9.32 9.32 0 0 0 23 3z"></path>
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
            </div>
          );
};

export default LandingPage;