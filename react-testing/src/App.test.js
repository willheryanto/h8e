import React from 'react';
import App from './App';
import { render } from './test-utils'

it('renders without crashing', () => {
  const { debug } = render(<App />)
  debug()
});
