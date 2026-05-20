import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Travel');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    onAddExpense({
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date
    });

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="form-card">
      <h2>Log Shift Overhead</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Expense Allocation Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="e.g., Transit, Client Lunch" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Cost Amount ($ USD)</label>
          <input 
            type="number" 
            step="0.01" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="0.00" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Operational Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Travel">Travel & Lodging</option>
            <option value="Meals">Meals & Entertainment</option>
            <option value="Supplies">Equipment & Supplies</option>
            <option value="Training">Training & Development</option>
          </select>
        </div>
        <div className="form-group">
          <label>Calendar Date</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" class="submit-btn">Commit to Schedule Logs</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
