import React, { useState } from 'react';

function AddPlayer({ onAdd }) {
  const [name, setName] = useState('');
  const [corporation, setCorporation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ name, corporation });
    setName('');
    setCorporation('');
  };

  return (
    <div>
      <h2>Add Player</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="corporation">Corporation:</label>
          <input
            type="text"
            id="corporation"
            value={corporation}
            onChange={(event) => setCorporation(event.target.value)}
          />
        </div>
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default AddPlayer;
