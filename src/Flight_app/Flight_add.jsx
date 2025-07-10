import React, { useState } from 'react';
import axios from 'axios';

export default function AddFlight() {
  const [form, setForm] = useState({ from: '', to: '', time: '', price: '', airline: '', seats: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://683ffb195b39a8039a5658ce.mockapi.io/flight', form);
      alert('Flight added successfully!');
      setForm({ from: '', to: '', time: '', price: '', airline: '', seats: '' });
    } catch (err) {
      alert('Error adding flight ' + err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="from" value={form.from} onChange={handleChange} placeholder="From" className="input" required />
      <input name="to" value={form.to} onChange={handleChange} placeholder="To" className="input" required />
      <input name="time" value={form.time} onChange={handleChange} placeholder="Time" className="input" required />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" className="input" required />
      <input name="seats" value={form.seats} onChange={handleChange} placeholder="Seats" type="number" className="input" required />
      <input name="airline" value={form.airline} onChange={handleChange} placeholder="Airline" className="input" required />
      <button type="submit" className="submit-button">Add Flight</button>
    </form>
  );
}