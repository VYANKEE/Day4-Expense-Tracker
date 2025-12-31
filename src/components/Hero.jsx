import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '90vh', textAlign: 'center' }}>
      <div className="container">
        {/* Glowing Text Effect */}
        <h1 
          className="hero-title"
          style={{
            fontSize: '4rem',
            background: 'linear-gradient(to right, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
            fontWeight: '800'
          }}
        >
          Master Your Money
        </h1>
        
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
          Stop wondering where your salary went. <br /> 
          Track, Analyze, and Save with the ultimate dark-mode expense tracker.
        </p>

        {/* Scroll to Tracker Section */}
        <a href="#tracker">
          <button className="btn-primary">
            Start Tracking Now ⬇
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;