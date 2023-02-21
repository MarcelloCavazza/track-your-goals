import { useState } from 'react'
import './App.css'
// import * as dotenv from "dotenv";
import DoneGoals from './DoneGoals/DoneGoals'
import LoginOrSignUpPage from './LoginOrSignUpPage/LoginOrSignUpPage'
// dotenv.config();


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // console.log('process.env.API_JWT_KEY', process.env.API_JWT_KEY)
  return (
    <div className="App">
      <div id='title'>
        Track your goals!
      </div>
      <div id='subtitle'>
        Insert your today's accomplishements, because life is a battle field.<br /> A win is a win, give yourself a pat on the back!
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
