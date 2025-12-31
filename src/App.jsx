import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Tracker from './components/Tracker';

function App() {
  // 1. State Initialize: Pehle LocalStorage check karo
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('myExpenses');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Effect: Jab bhi expenses badle, LocalStorage mein save karo
  useEffect(() => {
    localStorage.setItem('myExpenses', JSON.stringify(expenses));
  }, [expenses]);

  // 3. Add Function (Frontend Logic)
  const addExpense = (expense) => {
    // Naya expense upar (top) pe aayega
    setExpenses([expense, ...expenses]); 
  };

  // 4. Delete Function (Frontend Logic)
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  return (
    <div>
      <Hero />
      <Features />
      {/* Tracker ko data pass kar rahe hain */}
      <Tracker 
        expenses={expenses} 
        onAdd={addExpense} 
        onDelete={deleteExpense} 
      />
      
      <footer style={{ textAlign: 'center', padding: '40px', color: '#555', fontSize: '0.9rem' }}>
        Day 4 - Expense Tracker (Frontend Only)
      </footer>
    </div>
  );
}

export default App;