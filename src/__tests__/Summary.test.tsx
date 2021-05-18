import React from 'react';
import { render } from '@testing-library/react';
import SummaryCard from '../app/components/main-components/Summary/Summary';
import {GetStackDetails} from '../app/utils/apiCalls'

describe('<App />', () => {
  test('Should render the app Layout', async () => {
    GetStackDetails('5264cdab4838457d9c7ce2a420039dd2')
    render(<SummaryCard />);
  });
});
