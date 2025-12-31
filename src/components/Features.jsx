import React from 'react';

const Features = () => {
  return (
    <section id="features" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem' }}>
          Why Use This?
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {/* Card 1 */}
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⚡</div>
            <h3 style={{ marginBottom: '10px', color: 'var(--primary)' }}>Instant Tracking</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Add expenses in seconds. No complex forms, just pure speed.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🛡️</div>
            <h3 style={{ marginBottom: '10px', color: 'var(--secondary)' }}>Local Privacy</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Your data stays on your device. We use LocalStorage for persistence.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📊</div>
            <h3 style={{ marginBottom: '10px', color: '#ff0055' }}>Visual Insights</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              See exactly where your money goes with clear summaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;