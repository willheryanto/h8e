import { START, FILL_SQUARE } from './actionTypes'

export const startGame = () => ({ type: START })
export const fillSquare = index => ({ type: FILL_SQUARE, index })