// Vercel/Node.js API handler for leaderboard
export default async function handler(req, res) {
  const API_URL = 'https://apis.goated.com/user/affiliate/referral-leaderboard/UCW47GH';
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
}
// api/leaderboard.js
export default async function handler(req, res) {
  const API_URL = 'https://apis.goated.com/user/affiliate/referral-leaderboard/UCW47GH';
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
}