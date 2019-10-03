export const start = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: 'START' })
  }, 1000)
}
