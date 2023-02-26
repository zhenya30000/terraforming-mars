import React from 'react';

const PlayerDetails = ({ player }) => {
  return (
    <div>
      <h2>{player.name}</h2>
      <h3>Corporation: {player.corporation}</h3>
      <p>Credits: {player.credits}</p>
      <p>Megacredits: {player.production.megacredits}</p>
      <p>Steel: {player.production.steel}</p>
      <p>Titanium: {player.production.titanium}</p>
      <p>Plants: {player.production.plants}</p>
      <p>Energy: {player.production.energy}</p>
      <p>Heat: {player.production.heat}</p>
    </div>
  );
};

export default PlayerDetails;
