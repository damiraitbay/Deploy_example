import React, { useState } from 'react';
import AddFlight from './Flight_add';
import FlightList from './Flight_list';
import './App.css';

export default function App() {
  const [view, setView] = useState('add');

  return (
    <div className="app-container">
      <h1 className="app-title">✈️ Flight Manager</h1>
      <div className="navbar">
        <button onClick={() => setView('add')} className={`nav-button ${view === 'add' ? 'active' : ''}`}>Add Flight</button>
        <button onClick={() => setView('list')} className={`nav-button ${view === 'list' ? 'active' : ''}`}>Flight List</button>
      </div>
      {view === 'add' ? <AddFlight /> : <FlightList />}
    </div>
  );
}