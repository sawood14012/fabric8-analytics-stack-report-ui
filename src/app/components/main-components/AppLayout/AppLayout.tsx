import React from 'react';
import {
  Page,
  PageHeader,
  Grid, GridItem, PageSection, Nav, NavList, NavItem
} from '@patternfly/react-core';

interface MyNavProps {
}
class NavigationBar extends React.Component<MyNavProps, any>{
  onSelect: (result: any) => void;
  constructor(props: MyNavProps){
    super(props);
    this.state = {
      activeItem: 0
    };
    this.onSelect = result => {
      this.setState({
        activeItem: result.itemId
      })
    }
  }

  render() {
    const { activeItem } = this.state;
    const nav = (
      <Nav onSelect={this.onSelect} variant="horizontal">
        <NavList>
          <NavItem isActive={true} >
            Pom.xml
          </NavItem>
        </NavList>
      </Nav>
    );
    return <PageHeader topNav={nav}/>
  };
  
}
type LayoutProps = {
  Summary: any,
  Overview: any,
  Table: any
}
const AppLayout = ({ Summary, Overview, Table }: LayoutProps) => {
  const logoProps = {
    href: '/',
    onClick: () => console.log('clicked logo'),
  };
  const Header = (
    //<PageHeader
     // logo="Pom.xml"
      //logoProps={logoProps}
    ///>
    <NavigationBar/>
  );

  return (
    <Page  header={Header}>
      <PageSection>
      <Grid hasGutter>
        <GridItem span={5}>
          {Summary}

        </GridItem>
        <GridItem span={7}>

          {Overview}
        </GridItem>
        <GridItem span={12}>{Table}</GridItem>
      </Grid>
      </PageSection>
    </Page>

  );
};

export default AppLayout