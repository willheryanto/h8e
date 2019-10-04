import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Home from '.'

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({
    data: {
      "setup": "Can a kangaroo jump higher than the Empire State Building?",
      "punchline": "Of course. The Empire State Building can't jump."
    }
  }))
}))

test('loads and displays Home', async () => {
  const { findByTestId } = render(<Home />)
  const joke = await findByTestId('joke')

  expect(joke).toHaveTextContent(/kangaroo jump/)

})
