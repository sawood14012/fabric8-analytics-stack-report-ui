/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Page,
  PageHeader,
  Grid,
  GridItem,
  PageSection,
  Nav,
  NavList,
  NavItem,
  Backdrop,
  Bullseye,
  Spinner,
  Alert,
} from "@patternfly/react-core";
import Context from "../../../store/context";
import { GetStackDetails, RegisterUser } from "../../../utils/apiCalls";
import CRDALoader  from "../EmptyLayout/EmptyLayout";

type NavigationBarProps = {
  manifest: string;
};

const NavigationBar = ({ manifest }: NavigationBarProps) => {
  const nav = (
    <Nav variant="horizontal">
      <NavList>
        <NavItem isActive>{manifest}</NavItem>
      </NavList>
    </Nav>
  );
  return <PageHeader topNav={nav} />;
};

type LayoutProps = {
  Summary: any;
  Overview: any;
  Table: any;
};

function GetAndSetStackData(globalDispatch: any, id: string){
  useEffect(()=>{
    globalDispatch({ type: "Loading", data: true });
    GetStackDetails(id).then((res)=>{
    globalDispatch({ type: "APIData", data: res });
    globalDispatch({ type: "Loading", data: false });
  });
  }, []);
}

const AppLayout = ({ Summary, Overview, Table }: LayoutProps) => {
  // @ts-ignore
  const { globalState, globalDispatch } = useContext(Context);
  const [Load, setLoad] = useState(false);
  const [manifest, setManifest] = useState("None");
  const params = useParams<{ id: string }>();
  useEffect(() => {
    const loading = globalState.Loading;
    const manifestName = globalState.APIData?.manifest_name;
    setLoad(loading);
    setManifest(manifestName);
    
    // @ts-ignore
  }, [globalState]);

  const Header = <NavigationBar manifest={manifest} />;

  GetAndSetStackData(globalDispatch, params.id);
  
  // RegisterUser();
  if (Load) {
    return (
      
        <CRDALoader loading={Load} Header={Header}/>
      
    );
  }
  return (
    <Page header={Header}>
      <PageSection hasOverflowScroll>
        <Grid hasGutter>
          <GridItem span={5} >{Summary}</GridItem>
          <GridItem span={7}>{Overview}</GridItem>
          {/* <GridItem span={12}>{Table}</GridItem> */}
        </Grid>
      </PageSection>
    </Page>
  );
};

export default AppLayout;
