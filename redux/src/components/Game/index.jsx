import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { startGame } from '../../store/actions'
import Board from '../Board'

export default () => {
  const started = useSelector(state => state.started)
  const dispatch = useDispatch()

  const handleStart = () => {
    dispatch(startGame())
  }

  return (
    <div className="game">
      <div className="game-board">
        {
          started
            ? <Board />
            : (
              <button onClick={handleStart}>
                Start
              </button>
            )
        }
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}