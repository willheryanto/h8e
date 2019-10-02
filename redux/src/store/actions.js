import { START, FILL_SQUARE } from './actionTypes'

export const startGame = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: START })
  }, 100)
}
export const fillSquare = index => ({ type: FILL_SQUARE, index })