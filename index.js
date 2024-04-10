import mysql from 'mysql2/promise'
import assert from 'node:assert/strict'
import process from 'node:process'

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database:  process.env.MYSQL_DATABASE,
  port:  process.env.MYSQL_PORT,
})

const [rows] = await pool.execute('SELECT 1 + 1 AS total')

assert.deepEqual(rows, [{ total: 2 }])

pool.end()
