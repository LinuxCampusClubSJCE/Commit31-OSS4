import axios from 'axios'

// TODO: update VITE_API_URL in .env when backend is deployed
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:5000',
})

export async function loginUser(email, password) {
  try {
    const response = await API.post('/api/auth/login', { email, password })
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed')
  }
}

export async function registerUser(username, email, password) {
  try {
    const response = await API.post('/api/auth/register', { username, email, password })
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed')
  }
}
