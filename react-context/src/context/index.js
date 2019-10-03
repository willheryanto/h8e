import { useState, useEffect, useContext, createContext } from 'react'

import { thunk } from './middlewares'

const createStore = (reducer, enhancer) => {
  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer);
  }

  let currentState = null;
  let listeners = []

  const getState = () => currentState
  const dispatch = action => {
    currentState = reducer(currentState, action)
    listeners.forEach(listener => listener())
  }
  const subscribe = listener => {
    listeners.push(listener)
    const unsubscribe = () => {
      listeners.splice(listeners.indexOf(listener), 1)
    }
    return unsubscribe
  }

  dispatch({ type: 'INIT' })

  return { getState, dispatch, subscribe }
}

const applyMiddleware = middleware => createStore => reducer => {
  const store = createStore(reducer)

  const dispatch = action => {
    middleware(store)(store.dispatch)(action)
  }

  return {
    ...store,
    dispatch
  }
}

const initialState = {
  started: false,
  squares: Array(9).fill(null),
  turn: Math.random() < 0.5 ? 'X' : 'O',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return { ...state, started: Object.assign({}, state.started, action.payload) }
    case 'FILL_SQUARE':
      return {
        ...state,
        squares: [
          ...state.squares.slice(0, action.index),
          state.turn,
          ...state.squares.slice(action.index + 1)
        ],
        turn: state.turn === 'X' ? 'O' : 'X'
      }
    case 'INIT':
      return initialState
    default:
      return state
  }
}

// STORE
export const store = createStore(reducer, applyMiddleware(thunk))

// CONTEXT
export const GameContext = createContext(null)

// SELECTOR
export const useMySelector = selector => {
  const store = useContext(GameContext)
  const [data, setData] = useState(store.getState())
  useEffect(() => {
    return store.subscribe(() => {
      setData(Object.assign({}, store.getState()))
    })
  }, [store])
  return selector(data)
}

// DISPATCH
export const useMyDispatch = () => {
  const store = useContext(GameContext)
  return store.dispatch
}

window.store = store