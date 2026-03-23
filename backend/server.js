require('dotenv').config()

const express = require('express')
const cors = require('cors')
const db = require('./config/db')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(',') ?? ['http://localhost:3000'],
  })
)
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server running' })
})

app.get('/api/db-test', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()')
    res.json({ status: 'ok', time: result.rows[0] })
  } catch (err) {
    console.error('DB test endpoint failed', err)
    res.status(500).json({ status: 'error', message: 'Database test failed' })
  }
})

app.use('/api/auth', authRoutes)

const PORT = process.env.PORT ?? 5000

const startServer = async () => {
  await db.testConnection()
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

startServer().catch((err) => {
  console.error('Server startup failed', err)
  process.exit(1)
})
