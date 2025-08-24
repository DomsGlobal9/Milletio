import express from 'express';
import pool from './db.js'; // adjust if you're using CommonJS
import cors from 'cors';
import productRoutes from './routes/productRoutes.js'; 
const app = express();
// app.use(express.json());


app.use(cors({ origin: '*' })); // allow React dev server
app.use(express.json());
// Sample API to fetch users
// app.use('/api/products', productRoutes);



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
