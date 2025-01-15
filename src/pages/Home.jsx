import React from 'react';
import '../styles/Home.css';
import logo from '../assets/logo.svg';

const Home = () => {
    return (
        <div className="hero-section">
            <h1>Welcome to Urban Threads!</h1>
            <img className="logo" src={logo} alt="Logo"/>
        </div>
    );
};

export default Home;
