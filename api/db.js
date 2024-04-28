const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'PostgreSQL 16',
  password: 'root',
});

module.exports = pool;