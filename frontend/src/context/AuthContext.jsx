import { createContext, useState, useContext } from 'react'

const AuthContext = createContext(null)

function AuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    const stored = localStorage.getItem('token') ?? null
    return stored !== 'null' ? stored : null
  })

  const [user, setUser] = useState(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem('user'))
      return parsed ?? null
    } catch {
      localStorage.removeItem('user')
      return null
    }
  })

  function login(newToken, newUser) {
    localStorage.setItem('token', newToken)
    localStorage.setItem('user', JSON.stringify(newUser))
    setToken(newToken)
    setUser(newUser)
  }

  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider }
