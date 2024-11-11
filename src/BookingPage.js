
import React from 'react';
import './BusBooking.css';

const BookingPage = () => {
    const showSidePanel = (busName) => {
        alert(`Showing details for ${busName}`);
    };

    return (
        <div>
            <header>
                <div id="logo">
                    <img src="https://via.placeholder.com/50" alt="logo" />
                    <h1>Urban Connect</h1>
                </div>
                <div id="components">
                    <ul>
                        <li>Dashboard</li>
                        <li>Profile</li>
                        <li>Bookings</li>
                        <li>Wallet</li>
                        <li>Support</li>
                    </ul>
                </div>
            </header>

            <section id="hero">
                <h1 style={{ marginTop: '30vh' }}>Hassle-Free Bus Bookings, Every Time</h1>
                <div className="search-box">
                    <div className="input-group">
                        <label htmlFor="from">From</label>
                        <input type="text" id="from" placeholder="Chennai" />
                    </div>
                    <div className="swap-icon">⇄</div>
                    <div className="input-group">
                        <label htmlFor="to">To</label>
                        <input type="text" id="to" placeholder="Destination" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" />
                    </div>
                    <button className="search-btn">Search Buses</button>
                </div>
            </section>

            <section id="bus-schedule">
                <h2>Available Buses</h2>
                <div className="bus-grid">
                    {[...Array(9)].map((_, index) => (
                        <div className="bus-card" key={index} onClick={() => showSidePanel(`Bus ${index + 1}`)}>
                            <div className="bus-info">
                                <div id="card-logo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                    <h3>Bus {index + 1}</h3>
                                    <i className="fas fa-bus" style={{ fontSize: 'x-large' }}></i>
                                </div>
                                <p>Chitkara Express</p>
                                <p>Departure: 10:00 AM</p>
                                <p>Arrival: 3:00 PM</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    ); 
};

export default BookingPage;