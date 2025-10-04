import dotenv from 'dotenv';
dotenv.config(); // Load environment variables FIRST

import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';

const router = express.Router();

// Check if credentials are loaded
console.log('\n=== RAZORPAY CONFIGURATION ===');
console.log('Key ID exists:', !!process.env.RAZORPAY_KEY_ID);
console.log('Key ID value:', process.env.RAZORPAY_KEY_ID?.substring(0, 20) + '...');
console.log('Key Secret exists:', !!process.env.RAZORPAY_KEY_SECRET);
console.log('Key Secret length:', process.env.RAZORPAY_KEY_SECRET?.length);
console.log('==============================\n');

// Validate keys before initializing
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.error('❌ ERROR: Razorpay keys not found in environment variables!');
  console.error('Please check your .env file');
}

// Initialize Razorpay instance
let razorpay;
try {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
  });
  console.log('✅ Razorpay instance created successfully\n');
} catch (error) {
  console.error('❌ Failed to create Razorpay instance:', error);
}

// Create Razorpay order
router.post('/create-order', async (req, res) => {
  console.log('\n📥 Incoming order request:', req.body);
  
  try {
    const { amount, currency, receipt } = req.body;

    // Validate amount
    if (!amount || amount <= 0) {
      console.log('❌ Invalid amount');
      return res.status(400).json({
        success: false,
        message: 'Invalid amount'
      });
    }

    // Check if razorpay is initialized
    if (!razorpay) {
      console.error('❌ Razorpay instance not initialized');
      return res.status(500).json({
        success: false,
        message: 'Payment gateway not configured. Please check server logs.'
      });
    }

    const options = {
      amount: Math.round(amount * 100), // Razorpay expects amount in paise (integer)
      currency: currency || 'INR',
      receipt: receipt || `receipt_${Date.now()}`,
      notes: {
        description: 'Nutri Bar Order'
      }
    };

    console.log('📤 Creating order with options:', JSON.stringify(options, null, 2));

    const order = await razorpay.orders.create(options);
    
    console.log('✅ Order created successfully!');
    console.log('Order ID:', order.id);
    console.log('Order Amount:', order.amount);
    
    res.json({
      success: true,
      order
    });
    
  } catch (error) {
    console.error('\n❌ Error creating Razorpay order:');
    console.error('Error type:', typeof error);
    console.error('Error:', error);
    
    // Detailed error logging
    if (error) {
      console.error('Error message:', error.message);
      console.error('Error statusCode:', error.statusCode);
      console.error('Error code:', error.code);
      
      if (error.error) {
        console.error('Error description:', error.error.description);
        console.error('Error code:', error.error.code);
        console.error('Error field:', error.error.field);
        console.error('Error source:', error.error.source);
        console.error('Error step:', error.error.step);
        console.error('Error reason:', error.error.reason);
      }
      
      // Log the full error object
      console.error('Full error object:', JSON.stringify(error, null, 2));
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error?.message || 'Unknown error',
      details: error?.error?.description || error?.toString() || 'No details available',
      statusCode: error?.statusCode
    });
  }
});

// Verify payment signature
router.post('/verify-payment', (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature 
    } = req.body;

    console.log('\n🔐 Verifying payment:');
    console.log('Order ID:', razorpay_order_id);
    console.log('Payment ID:', razorpay_payment_id);

    if (!process.env.RAZORPAY_KEY_SECRET) {
      console.error('❌ Key secret not found');
      return res.status(500).json({
        success: false,
        message: 'Payment verification failed - configuration error'
      });
    }

    // Create signature
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest('hex');

    // Verify signature
    if (razorpay_signature === expectedSign) {
      console.log('✅ Payment verified successfully');
      // Payment is successful - Save to database here
      return res.json({
        success: true,
        message: 'Payment verified successfully',
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id
      });
    } else {
      console.log('❌ Invalid signature');
      return res.status(400).json({
        success: false,
        message: 'Invalid signature'
      });
    }
  } catch (error) {
    console.error('❌ Error verifying payment:', error);
    res.status(500).json({
      success: false,
      message: 'Payment verification failed',
      error: error.message
    });
  }
});

// Get payment details (optional)
router.get('/payment/:paymentId', async (req, res) => {
  try {
    const payment = await razorpay.payments.fetch(req.params.paymentId);
    res.json({
      success: true,
      payment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch payment details',
      error: error.message
    });
  }
});

export default router;