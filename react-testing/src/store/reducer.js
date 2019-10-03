import { FILL_SQUARE } from './actionTypes'

const initialState = {
  squares: Array(9).fill(null),
  turn: Math.random() < 0.5 ? 'X' : 'O'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_SQUARE:
      return {
        ...state,
        squares: [
          ...state.squares.slice(0, action.index),
          state.turn,
          ...state.squares.slice(action.index + 1)
        ],
        turn: state.turn === 'X' ? 'O' : 'X'
      }
    default:
      return state
  }
}

export default reducer