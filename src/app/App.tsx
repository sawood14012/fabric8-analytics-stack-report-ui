import React from 'react';
import './App.scss';
import '@patternfly/react-core/dist/styles/base.css';
import  AppLayout  from './components/main-components/AppLayout/AppLayout'
import SummaryCard from './components/main-components/Summary/Summary'
import OverviewCard from './components/main-components/overview/overview'
import Tableview from './components/main-components/Table/Table'

function App() {
  return (
    <AppLayout 
    Summary={<SummaryCard/>}
    Overview={<OverviewCard/>}
    Table={<Tableview/>}
    
    />
  );
}

export default App;
