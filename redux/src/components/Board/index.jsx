import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fillSquare } from '../../store/actions'
import Square from '../Square'

export default props => {
  const squares = useSelector(state => state.squares)
  const turn = useSelector(state => state.turn)
  const dispatch = useDispatch()

  const handleClick = i => {
    dispatch(fillSquare(i))
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