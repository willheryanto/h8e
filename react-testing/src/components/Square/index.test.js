import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Square from '.';


test('display correct value for X', () => {
  const { queryByText, getByText } = render(
    <Square value={'X'} />
  )
  expect(queryByText('O')).toBeNull()
  const xButton = getByText('X')
  expect(xButton).toBeInTheDocument()  
  expect(xButton).toHaveStyle('color: blue')
})

test('display correct value for O', () => {
  const { queryByText, getByText } = render(
    <Square value={'O'} />
  )
  expect(queryByText('X')).toBeNull()
  const oButton = getByText('O')
  expect(oButton).toBeInTheDocument()  
  expect(oButton).toHaveStyle('color: red')
})

test('display correct value for empty button', () => {
  const { queryByText } = render(
    <Square value={null} />
  )
  expect(queryByText('X')).toBeNull()
  expect(queryByText('O')).toBeNull()
})


