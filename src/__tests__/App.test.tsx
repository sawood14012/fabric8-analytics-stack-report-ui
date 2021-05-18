import React from 'react';
import { render } from '@testing-library/react';
import App from '../app/App'; 
import {GetStackDetails} from '../app/utils/apiCalls'

describe('<App />', () => {
  test('Should render the app', async () => {

    render(<App />);
  });
});
