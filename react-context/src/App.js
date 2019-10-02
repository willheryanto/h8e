import React from 'react'

import Game from './components/Game'
import './App.css'

import { GameContext, store } from './context'

const App = () => {
  return (
    <GameContext.Provider value={store}>
      <Game />
    </GameContext.Provider>
  )
}

export default App