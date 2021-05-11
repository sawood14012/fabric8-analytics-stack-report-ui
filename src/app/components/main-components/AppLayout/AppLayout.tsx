/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Page,
  PageHeader,
  Grid,
  GridItem,
  PageSection,
  Nav,
  NavList,
  NavItem,
} from '@patternfly/react-core';
import { GetStackDetails } from '../../../utils/apiCalls';

class NavigationBar extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const nav = (
      <Nav variant="horizontal">
        <NavList>
          <NavItem isActive>Pom.xml</NavItem>
        </NavList>
      </Nav>
    );
    return <PageHeader topNav={nav} />;
  }
}

type LayoutProps = {
  Summary: any;
  Overview: any;
  Table: any;
};
const AppLayout = ({ Summary, Overview, Table }: LayoutProps) => {
  const Header = (
    // <PageHeader
    // logo="Pom.xml"
    // logoProps={logoProps}
    /// >
    <NavigationBar />
  );
  GetStackDetails();
  return (
    <Page header={Header}>
      <PageSection>
        <Grid hasGutter>
          <GridItem span={5}>{Summary}</GridItem>
          <GridItem span={7}>{Overview}</GridItem>
          <GridItem span={12}>{Table}</GridItem>
        </Grid>
      </PageSection>
    </Page>
  );
};

export default AppLayout;
