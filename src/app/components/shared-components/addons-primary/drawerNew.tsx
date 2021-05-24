/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from "react";
import {
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  Split,
  SplitItem,
  Title,
} from "@patternfly/react-core";
import GithubStats from "./github_stats";
import ComposableTableMisc from "./addonstable";
import Context from "../../../store/context";

const drawD = {
  name: "Hello",
  licenses: "Apache License,version2.0",
  latest_version: "2.0.0",
  github: {
    contributors: "32",
    dependent_projects: "22",
    dependent_repos: "5",
    first_release_date: null,
    forks_count: "101",
    issues: {
      month: {
        closed: 2,
        opened: 1,
      },
      year: {
        closed: 9,
        opened: 8,
      },
    },
    latest_release_duration: "2017-03-07 15:32:13",
    open_issues_count: "0",
    pull_requests: {
      month: {
        closed: 12,
        opened: 12,
      },
      year: {
        closed: 84,
        opened: 84,
      },
    },
    size: "N/A",
    stargazers_count: "387",
    total_releases: "18",
    used_by: [],
    watchers: "23",
  },
};

const DrawerFC = () => {
  // @ts-ignore
  const { globalState, globalDispatch } = useContext(Context);
  const [Companion, setCompanion] = useState([]);
  useEffect(() => {
    const companionDeps = globalState.APIData?.recommendation?.companion;
    console.log("hey baby");
    console.log(companionDeps);

    setCompanion(companionDeps);

    // @ts-ignore
  }, [globalState]);

  console.log(Companion);

  let rows: any;

  Companion.forEach((element: any) => {
    const row = {
      name: element.name,
      progress: element.cooccurrence_probability,
      drawer: element,
    };
    rows.push(row);
  });

  const [drawerSta, setDrawerState] = useState(false);
  const [drawerData, setDrawerData] = useState(drawD);
  const panelc = (
    <DrawerPanelContent>
      <DrawerHead>
        <h3 className="pf-c-title pf-m-2xl">{drawerData.name}</h3>
        <DrawerActions>
          <DrawerCloseButton onClick={() => setDrawerState(false)} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <Grid hasGutter>
          <GridItem span={6}>
            <Flex key="2" direction={{ default: "column" }}>
              <FlexItem spacer={{ default: "spacerNone" }}>
                <Split>
                  <SplitItem>
                    Latest Version
                    <div>{drawerData.latest_version}</div>
                  </SplitItem>
                </Split>
              </FlexItem>
              <FlexItem spacer={{ default: "spacerNone" }}>
                <Split>
                  <Title headingLevel="h6" size="md">
                    Licence(s) used
                    <div>{drawerData.licenses}</div>
                  </Title>
                </Split>
              </FlexItem>
            </Flex>
          </GridItem>
          <GridItem span={6}>
            <GithubStats
              contributors={Number(drawerData.github.contributors)}
              dependentRepos={Number(drawerData.github.dependent_repos)}
              usage={Number(drawerData.github.used_by.length)}
              forks={Number(drawerData.github.forks_count)}
              stars={Number(drawerData.github.stargazers_count)}
            />
          </GridItem>
        </Grid>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );
  return (
    <Drawer className="DrawerSize" isExpanded={drawerSta}>
      <DrawerContent panelContent={panelc}>
        <DrawerContentBody>
          <ComposableTableMisc
            drawerSta={drawerSta}
            setDrawerState={setDrawerState}
            rowData={rows}
            setDrawerData={setDrawerData}
          />
        </DrawerContentBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerFC;
