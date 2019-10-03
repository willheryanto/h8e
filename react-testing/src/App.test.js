import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import store from './store'
import App from './App';

it('renders correctly', () => {
  const { getByText, queryByText, container, getByTestId } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )

  expect(getByText(/let's play/i)).toBeInTheDocument()
  expect(container.querySelector('.game-board')).toBeNull()
  
  fireEvent.click(getByTestId('link-to-game'))
  
  expect(queryByText(/let's play/i)).toBeNull()
  expect(container.querySelector('.game-board')).toBeInTheDocument()
});
