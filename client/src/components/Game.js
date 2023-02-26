import React, { useState, useEffect } from 'react';
import PlayerDetails from '../components/PlayerDetails';

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState({});

  useEffect(() => {
    // Fetch current player data
    const fetchCurrentPlayer = async () => {
      const response = await fetch('/api/player');
      const data = await response.json();
      setCurrentPlayer(data);
    };

    fetchCurrentPlayer();
  }, []);

  return (
    <div>
      <h1>Terraforming Mars</h1>
      <PlayerDetails player={currentPlayer} />
    </div>
  );
};

export default Game;
