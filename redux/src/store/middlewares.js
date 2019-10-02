export const logger = store => next => action => {
  console.log('dispatching', action)
  next(action)
}

export const logger2 = store => next => action => {
  console.log('after thunk', action)
  next(action)
}