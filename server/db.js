// db.js  (ES‑module style)
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user:     process.env.DB_USER,
  host:     process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port:     Number(process.env.DB_PORT),   // ensure it’s a number
});

// ───────────────────────────────────────────────
// Optional one‑time health‑check at startup
(async () => {
  try {
    // Try a simple query; if it fails, the catch block runs.
    await pool.query('SELECT NOW()');
    console.log('✅ PostgreSQL connected');
  } catch (err) {
    console.error('❌ PostgreSQL connection error:', err.message);
  }
})();
// ───────────────────────────────────────────────

// Export the pool so the rest of your code can reuse it
export default pool;
