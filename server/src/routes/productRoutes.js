import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

// GET /api/products  →  all products
router.get('/', async (_req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM products ORDER BY id ASC');
    res.json(rows);                         // 200 OK → [{id:1, name:'…', …}, …]
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

export default router;
