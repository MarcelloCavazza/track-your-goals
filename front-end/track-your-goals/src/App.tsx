import { useState } from 'react'
import './App.css'
import DoneGoals from './DoneGoals/DoneGoals'
import LoginOrSignUpPage from './LoginOrSignUpPage/LoginOrSignUpPage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div className="App">
      <div id='title'>
        Track your goals!
      </div>
      <div style={{ display: isAuthenticated ? "none" : "block" }}>
        <LoginOrSignUpPage />
      </div>
      {/* style={{ display: isAuthenticated ? "block" : "none" }} */}
      <div >
        <DoneGoals />
      </div>
    </div >
  )
}

export default App
