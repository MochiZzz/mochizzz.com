import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://mochizzz.com']
}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  
  console.log('Contact form:', { name, email, message });
  
  res.json({ success: true, message: 'Thanks for your message!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});