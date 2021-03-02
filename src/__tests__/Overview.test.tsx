import React from 'react';
import { render } from '@testing-library/react';
import OverviewCard from '../app/components/main-components/overview/overview';

describe('<App />', () => {
  test('Should render the app Layout', async () => {
    render(<OverviewCard />);
  });
});
