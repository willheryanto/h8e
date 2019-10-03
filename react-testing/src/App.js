import React from 'react'
import { Switch, Route } from "react-router-dom"
import { Flex, Box } from 'reflexbox'

import Sidebar from './components/Sidebar'
import Home from './containers/Home'
import Game from './containers/Game'
import './App.css'

const App = () => {
  return (
    <Flex p={0}>
      <Box width={1 / 3}>
        <Sidebar />
      </Box>
      <Box width={2 / 3} pt="20px">
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Box>
    </Flex>
  )
}

export default App