import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FlightList() {
  const [flights, setFlights] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://683ffb195b39a8039a5658ce.mockapi.io/flight')
      .then(res => setFlights(res.data))
      .catch(() => alert('Error fetching flights'));
  }, []);

  const filtered = flights.filter(f => f.from.toLowerCase().includes(search.toLowerCase()) || f.to.toLowerCase().includes(search.toLowerCase()));

  const handleClick = (flight) => {
    const details = `From: ${flight.from}\nTo: ${flight.to}\nTime: ${flight.time}\nPrice: ${flight.price}\nSeats: ${flight.seats}\nAirline: ${flight.airline}`;
    alert(details);
  };

  return (
    <div className="list-container">
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by city" className="input" />
      <ul className="flight-list">
        {filtered.map((f, i) => (
          <li key={i} className="flight-card" onClick={() => handleClick(f)}>
            <p><strong>From:</strong> {f.from} → <strong>To:</strong> {f.to}</p>
            <p><strong>Time:</strong> {f.time} | <strong>Price:</strong> ${f.price} | <strong>Seats:</strong> {f.seats}</p>
            <p><strong>Airline:</strong> {f.airline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}