import React from 'react';

function Players(props) {
  const { players } = props;

  return (
    <>
      <h2>Players</h2>
      <ul>
        {players.map(player => (
          <li key={player._id}>
            <p>{player.name}</p>
            <p>Corporation: {player.corporation}</p>
            <p>Credits: {player.credits}</p>
            <p>
              Production:{' '}
              {Object.entries(player.production)
                .map(([resource, amount]) => `${resource}: ${amount}`)
                .join(', ')}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Players;
