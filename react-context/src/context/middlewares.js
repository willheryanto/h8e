export const logger = store => next => action => {
  console.log('dispatching', action)
  next(action)
}

export const thunk = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch)
  } else {
    next(action)
  }
}