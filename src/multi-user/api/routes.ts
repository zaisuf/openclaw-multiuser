import { Router } from 'express';
import { createUser, loginUser, getUserFromToken } from './auth';

const router = Router();

// Signup
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await createUser(email, password);
    res.json({
      success: true,
      user: { id: user.id, email: user.email, token: user.token }
    });
  } catch (error) {
    res.status(400).json({ error: 'User already exists' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await loginUser(email, password);
    res.json({
      success: true,
      user: { id: user.id, email: user.email, token: user.token }
    });
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Get current user
router.get('/me', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  const userId = getUserFromToken(token);
  if (!userId) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  // Fetch user from database
  res.json({ userId, token });
});

// Get user token
router.get('/token', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const userId = getUserFromToken(token);
  
  if (!userId) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  res.json({ token, userId });
});

export default router;
