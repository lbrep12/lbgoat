const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 53864;

// This is the real API endpoint, only visible on the server
const API_URL = 'https://apis.goated.com/user/affiliate/referral-leaderboard/UCW47GH';

app.get('/api/leaderboard', async (req, res) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});