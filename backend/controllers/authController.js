const bcrypt = require('bcrypt')
const { findUserByEmail, createUser } = require('../models/userModel')

const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email and password are required' })
  }

  try {
    const existingUser = await findUserByEmail(email)

    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const createdUser = await createUser(name, email, hashedPassword)

    return res.status(201).json({
      message: 'User registered successfully',
      user: createdUser,
    })
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = { registerUser }
