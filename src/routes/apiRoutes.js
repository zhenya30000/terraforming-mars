const express = require('express');
const router = express.Router();
const Player = require('../models/player');

router.get('/players', (req, res) => {
  Player.find()
    .then((players) => res.json(players))
    .catch((error) => res.status(500).json({ error }));
});

router.post('/players', (req, res) => {
  const { name, corporation, color } = req.body;
  const player = new Player({ name, corporation, color });
  player.save()
    .then((player) => res.json(player))
    .catch((error) => res.status(500).json({ error }));
});

router.put('/players/:id', (req, res) => {
  const { id } = req.params;
  const { name, corporation, color } = req.body;
  Player.findByIdAndUpdate(id, { name, corporation, color }, { new: true })
    .then((player) => res.json(player))
    .catch((error) => res.status(500).json({ error }));
});

router.delete('/players/:id', (req, res) => {
  const { id } = req.params;
  Player.findByIdAndDelete(id)
    .then(() => res.sendStatus(204))
    .catch((error) => res.status(500).json({ error }));
});

module.exports = router;
