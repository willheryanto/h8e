import React from 'react'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import store from '../../store'
import Board from '.'

test('renders board correctly', () => {
  const { getAllByLabelText } = render(
    <Provider store={store}>
      <Board />
    </Provider>
  )

  const turn = store.getState().turn

  const squares = getAllByLabelText('square-button')
  expect(squares).toHaveLength(9)
  
  expect(squares[0]).not.toHaveTextContent(turn)

  fireEvent.click(squares[0])
  expect(squares[0]).toHaveTextContent(turn)
})