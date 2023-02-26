import React from 'react';

function PlayerList({ players }) {
  return (
    <div>
      <h2>Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player._id}>
            {player.name} ({player.corporation})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
