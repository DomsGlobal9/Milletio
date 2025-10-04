// Load environment variables FIRST before anything else
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import paymentRoutes from './src/routes/payment.js';

// Debug: Check if .env is loaded
console.log('\n=== SERVER ENVIRONMENT CHECK ===');
console.log('Key ID:', process.env.RAZORPAY_KEY_ID?.substring(0, 20) + '...');
console.log('Key ID Full Length:', process.env.RAZORPAY_KEY_ID?.length);
console.log('Key Secret:', process.env.RAZORPAY_KEY_SECRET ? '✅ Loaded (Length: ' + process.env.RAZORPAY_KEY_SECRET.length + ')' : '❌ Not Found');
console.log('================================\n');

const app = express();

app.use(cors({ origin: '*' })); // In production, specify your frontend URL
app.use(express.json());

// Payment routes - this connects to /api/payment
app.use('/api/payment', paymentRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});