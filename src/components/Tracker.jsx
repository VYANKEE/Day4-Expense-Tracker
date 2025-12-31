import React, { useState } from 'react';

const Tracker = ({ expenses, onAdd, onDelete }) => {
  // Local state for the form inputs
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: 'Food'
  });

  // Calculate Total Balance
  const total = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.title || !formData.amount) return;

    const newExpense = {
      id: Date.now(),
      ...formData,
      amount: parseFloat(formData.amount),
      date: new Date().toLocaleDateString()
    };

    onAdd(newExpense);
    setFormData({ title: '', amount: '', category: 'Food' });
  };

  return (
    <section id="tracker" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <div className="container">
        <h2 style={{ marginBottom: '40px', textAlign: 'center', fontSize: '2.5rem' }}>
          Apna Khata (Dashboard)
        </h2>
        
        {/* --- SUMMARY CARDS --- */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Total Spent Card */}
          <div className="glass-card" style={{ textAlign: 'center', minWidth: '200px', borderLeft: '4px solid var(--primary)' }}>
            <span style={{ color: 'var(--text-muted)' }}>Kul Kharcha (Total)</span>
            {/* RUPEE SYMBOL HERE */}
            <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginTop: '10px' }}>
              ₹{total.toFixed(2)}
            </h3>
          </div>
          
          {/* Transaction Count Card */}
          <div className="glass-card" style={{ textAlign: 'center', minWidth: '200px', borderLeft: '4px solid var(--secondary)' }}>
            <span style={{ color: 'var(--text-muted)' }}>Transactions</span>
            <h3 style={{ fontSize: '2.5rem', color: 'white', marginTop: '10px' }}>
              {expenses.length}
            </h3>
          </div>
        </div>

        {/* --- MAIN GRID --- */}
        <div className="tracker-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
          
          {/* LEFT: Add Form */}
          <div className="glass-card" style={{ height: 'fit-content' }}>
            <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Naya Kharcha Jodein</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Kahan kharch kiya?</label>
                <input 
                  type="text" 
                  placeholder="Jaise: Chai, Petrol, Recharge" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                {/* RUPEE LABEL HERE */}
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Kitne Rupaye? (₹)</label>
                <input 
                  type="number" 
                  placeholder="0" 
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Category</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}
                >
                  <option value="Food">🍔 Khana (Food)</option>
                  <option value="Travel">🚕 Aana-Jana (Travel)</option>
                  <option value="Bills">💡 Bills & Recharge</option>
                  <option value="Shopping">🛍️ Shopping</option>
                  <option value="Other">❓ Any (Other)</option>
                </select>
              </div>

              <button className="btn-primary" style={{ width: '100%', marginTop: '0' }}>
                Add Kar Do
              </button>
            </form>
          </div>

          {/* RIGHT: Transaction List */}
          <div className="glass-card" style={{ maxHeight: '600px', overflowY: 'auto' }}>
            <h3 style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>Purana Hisab</h3>
            
            {expenses.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                <p>Abhi tak koi kharcha nahi hai.</p>
                <small>Pehla kharcha add karo!</small>
              </div>
            ) : (
              expenses.map((exp) => (
                <div key={exp.id} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '15px', 
                  marginBottom: '10px', 
                  background: 'rgba(255,255,255,0.03)', 
                  borderRadius: '10px',
                  borderLeft: `4px solid ${exp.amount > 500 ? 'var(--danger)' : 'var(--primary)'}` 
                }}>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{exp.title}</h4>
                    <small style={{ color: 'var(--text-muted)' }}>{exp.date} • {exp.category}</small>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {/* RUPEE SYMBOL HERE */}
                    <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'white' }}>
                      -₹{exp.amount}
                    </span>
                    <button 
                      onClick={() => onDelete(exp.id)}
                      style={{ background: 'none', border: 'none', color: 'var(--danger)', cursor: 'pointer', fontSize: '1.2rem' }}
                      title="Delete"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Tracker;