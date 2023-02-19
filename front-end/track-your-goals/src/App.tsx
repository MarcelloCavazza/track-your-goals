import { useState } from 'react'
import './App.css'
import LoginPage from './loginpage/LoginPage'
import SingUpPage from './loginpage/SingUpPage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div className="App">
      <div style={{ display: isAuthenticated ? "none" : "block" }}>
        <LoginPage />
      </div>
      <div style={{ display: isAuthenticated ? "none" : "block" }}>
        <SingUpPage />
      </div>
      <div style={{ display: isAuthenticated ? "block" : "none" }}>
      </div>
    </div >
  )
}

export default App
