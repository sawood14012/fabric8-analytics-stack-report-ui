import React from 'react';
import { render } from '@testing-library/react';
import AppLayout from '../app/components/main-components/AppLayout/AppLayout';
import SummaryCard from '../app/components/main-components/Summary/Summary';
import OverviewCard from '../app/components/main-components/Overview/overview';
import Tableview from '../app/components/main-components/Table/Table';

describe('<App />', () => {
  test('Should render the app Layout', async () => {
    render(
      <AppLayout
        Summary={<SummaryCard />}
        Overview={<OverviewCard />}
        Table={<Tableview />}
      />,
    );
  });
});
