import { useEffect, useState } from 'react'
import './App.css'
import DoneGoals from './DoneGoals/DoneGoals'
import * as LocalStorage from './Utils/LocalStorage';

function App() {
  return (
    <div className="App">
      <div id='title'>
        Track your goals!
      </div>
      <div id='subtitle'>
        Insert your today's accomplishements, because life is a battle field.<br /> A win is a win, give yourself a pat on the back!
      </div>
      <div >
        <DoneGoals />
      </div>
    </div >
  )
}

export default App
