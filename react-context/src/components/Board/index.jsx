import React from 'react'

import { useMySelector, useMyDispatch } from '../../context'
import Square from '../Square'

export default props => {
  const squares = useMySelector(state => state.squares)
  const turn = useMySelector(state => state.turn)
  const dispatch = useMyDispatch()

  const handleClick = index => {
    dispatch({type: 'FILL_SQUARE', index})
  }

  const status = 'Next player: ' + turn

  return (
    <div>
      <div className="status">{status}</div>
      {[0, 1, 2].map(row => (
        <div key={row} className="board-row">
          {[0, 1, 2].map((col) => {
            const i = row * 3 + col
            return (
              <Square
                key={i}
                value={squares[i]}
                handleClick={() => handleClick(i)}
              />
            )
          })}
        </div>
      ))}
    </div>
  );
}