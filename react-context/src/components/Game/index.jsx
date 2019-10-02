import React from 'react'

import { useMySelector, useMyDispatch } from '../../context'
import Board from '../Board'

export default () => {
  const started = useMySelector(state => state.started)
  const dispatch = useMyDispatch()

  const handleStart = () => {
    dispatch({ type: 'START' })
  }

  return (
    <div className="game">
      <div className="game-board">
        {
          started
            ? <Board />
            : <button onClick={handleStart}>
                Start
              </button>
        }
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}