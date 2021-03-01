import React from 'react';
import { render } from '@testing-library/react';
import SummaryCard from '../app/components/main-components/Summary/Summary';

describe('<App />', () => {
  test('Should render the app Layout', async () => {
    render(<SummaryCard />);
  });
});
