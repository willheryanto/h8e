import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios'

import Home from '.'

test('loads and displays Home', async () => {
  jest
    .spyOn(axios, 'get')
    .mockResolvedValueOnce({
      data: {
        "setup": "Can a kangaroo jump higher than the Empire State Building?",
        "punchline": "Of course. The Empire State Building can't jump."
      }
    })

  const { findByTestId } = render(<Home />)
  const joke = await findByTestId('joke')
  expect(joke).toHaveTextContent(/kangaroo jump/)
})

