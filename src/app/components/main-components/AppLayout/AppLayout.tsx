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
} from "@patternfly/react-core";
import Context from "../../../store/context";
import { GetStackDetails, RegisterUser } from "../../../utils/apiCalls";
import CRDALoader from "../EmptyLayout/EmptyLayout";
import ErrorPage from "../ErrorHandler/ErrorHandler";

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

function GetAndSetStackData(globalDispatch: any, id: string, uuid: string) {
  useEffect(() => {
    globalDispatch({ type: "Loading", data: true });
    GetStackDetails(id, uuid).then((res) => {
      if (res.code === 200) {
        globalDispatch({ type: "APIData", data: res.data });
        localStorage.setItem("requestId", res.data.external_request_id);
        globalDispatch({ type: "Loading", data: false });
      } else {
        globalDispatch({ type: "ErrorData", data: res });
        globalDispatch({ type: "Error", data: true });
      }
    });
  }, []);
}

const AppLayout = ({ Summary, Overview, Table }: LayoutProps) => {
  // @ts-ignore
  const { globalState, globalDispatch } = useContext(Context);
  const [Load, setLoad] = useState(false);
  const [LoadError, setLoadError] = useState(false);
  const [manifest, setManifest] = useState("None");

  const params = useParams<{ id: string; uuid: string }>();
  useEffect(() => {
    const loading = globalState.Loading;
    const manifestName = globalState.APIData?.manifest_name;
    const error = globalState.Error;
    setLoad(loading);
    setManifest(manifestName);
    setLoadError(error);
    // @ts-ignore
  }, [globalState]);

  const Header = <NavigationBar manifest={manifest} />;

  GetAndSetStackData(globalDispatch, params.id, params.uuid);

  if (LoadError) {
    return <ErrorPage />;
  }

  if (Load) {
    return <CRDALoader loading={Load} />;
  }
  return (
    <Page header={Header}>
      <PageSection>
        <Grid xl2={12} span={12} hasGutter>
          <GridItem sm={12} md={12} lg={6} xl={5}>
            {Summary}
          </GridItem>
          <GridItem sm={12} md={12} lg={6} xl={7}>
            {Overview}
          </GridItem>
          <GridItem sm={12} md={12} lg={12} xl={12}>
            {Table}
          </GridItem>
        </Grid>
      </PageSection>
    </Page>
  );
};

export default AppLayout;
