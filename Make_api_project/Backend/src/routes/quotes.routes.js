import express from 'express';

const router = express.Router();

// Fake quotes data
const quotes = [
  { id: 1, text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs', category: 'Motivation' },
  { id: 2, text: 'Innovation distinguishes between a leader and a follower.', author: 'Steve Jobs', category: 'Innovation' },
  { id: 3, text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon', category: 'Life' },
  { id: 4, text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt', category: 'Dreams' },
  { id: 5, text: 'It is during our darkest moments that we must focus to see the light.', author: 'Aristotle', category: 'Wisdom' },
  { id: 6, text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill', category: 'Success' },
];

// Get all quotes
router.get('/quotes', (req, res) => {
  res.json({
    success: true,
    count: quotes.length,
    data: quotes
  });
});

// Get single quote by ID
router.get('/quotes/:id', (req, res) => {
  const quote = quotes.find(q => q.id === parseInt(req.params.id));
  if (!quote) {
    return res.status(404).json({ success: false, message: 'Quote not found' });
  }
  res.json({ success: true, data: quote });
});

// Get random quote
router.get('/quotes/random', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ success: true, data: randomQuote });
});

export default router;

