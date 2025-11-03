import express from 'express';

const router = express.Router();

// Fake users data
const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 28, city: 'New York', role: 'Developer' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 32, city: 'Los Angeles', role: 'Designer' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', age: 45, city: 'Chicago', role: 'Manager' },
  { id: 4, name: 'Alice Williams', email: 'alice.williams@example.com', age: 29, city: 'Houston', role: 'Developer' },
  { id: 5, name: 'Charlie Brown', email: 'charlie.brown@example.com', age: 35, city: 'Phoenix', role: 'Analyst' },
];

// Get all users
router.get('/users', (req, res) => {
  res.json({
    success: true,
    count: users.length,
    data: users
  });
});

// Get single user by ID
router.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }
  res.json({ success: true, data: user });
});

export default router;

