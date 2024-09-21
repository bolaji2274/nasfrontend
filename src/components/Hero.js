import React, { useEffect, useState } from 'react';
import '../styles/Hero.css'; // Import CSS file for styling

const Hero = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote(); // Fetch initial quote on component mount
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to NASRADAMUFF FARM</h1>
        <p>Your trusted partner in livestock and agro-allied ventures</p>
        <p className="quote">"{quote}"</p>
        <button className="btn-primary" onClick={fetchQuote}>
          Generate New Quote
        </button>
      </div>
    </section>
  );
};

export default Hero;
