import React from 'react';
import { render } from '@testing-library/react';
import App from '../app/App';

describe('<App />', () => {
  test('Should render the app', async () => {
    render(<App />);
  });
});
