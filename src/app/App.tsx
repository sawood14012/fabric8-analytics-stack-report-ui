import React from "react";
import "./App.scss";
import "@patternfly/react-core/dist/styles/base.css";
import AppLayout from "./components/main-components/AppLayout/AppLayout";
import SummaryCard from "./components/main-components/Summary/Summary";
import OverviewCard from "./components/main-components/Overview/overview";
import Tableview from "./components/main-components/Table/Table.js";
import GlobalStateProvider from "./store/GlobalStateProvider";
import { GetStackDetails } from "./utils/apiCalls";

function App() {
  return (
    <GlobalStateProvider>
      <AppLayout
        Summary={<SummaryCard />}
        Overview={<OverviewCard />}
        Table={<Tableview />}
      />
    </GlobalStateProvider>
  );
}

export default App;
