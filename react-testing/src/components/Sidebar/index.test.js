import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Sidebar from '.'

test('display correct menu', () => {
  const { getByTestId } = render(
    <Router>
      <Sidebar />
    </Router>
  )

  expect(getByTestId('link-to-home')).toBeInTheDocument()
  expect(getByTestId('link-to-game')).toBeInTheDocument()
})