import React, { useState } from 'react';
import './App.css';
import Header from '../src_components/Header';
import ExpenseForm from '../src_components/ExpenseForm';
import ExpenseList from '../src_components/ExpenseList';
import Receipt from '../src_components/Receipt';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Shift Travel Allowance', amount: 45.50, category: 'Travel', date: '2026-05-18' },
    { id: 2, title: 'On-Call Meal Voucher', amount: 18.75, category: 'Meals', date: '2026-05-19' }
  ]);

  const addExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="app-container">
      <Header/>
      
      <div className="dashboard-summary">
        <h3>Secure Access Confirmed: My KP Schedule login Ecosystem</h3>
        <p>Operational sync status: <strong>Active</strong>. Use this terminal interface to systematically audit your schedule shift expenses, print dynamic transaction receipts, and track localized overhead data updates.</p>
      </div>

      <div className="main-content">
        <div className="sidebar-section">
          <ExpenseForm onAddExpense="{addExpense}"/>
          <Receipt expenses="{expenses}"/>
        </div>
        <div className="display-section">
          <ExpenseList expenses="{expenses}" onDeleteExpense="{deleteExpense}"/>
        </div>
      </div>
    </div>
  );
}

export default App;
