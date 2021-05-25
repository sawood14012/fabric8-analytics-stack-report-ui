import { ChartDonut } from "@patternfly/react-charts";
import {
  Flex,
  FlexItem,
  Grid,
  GridItem,
  Split,
  SplitItem,
  Text,
  TextContent,
  Title,
} from "@patternfly/react-core";
import { SecurityIcon } from "@patternfly/react-icons";
import React, { useState } from "react";
import GithubStats from "../../shared-components/addons-primary/github_stats";

function VersionDetails() {
  const drawD = {
    name: "org.apache.commons:commons-lang3",
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
  const [drawerData, setDrawerData] = useState(drawD);
  const SummaryDonut = () => (
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea
      data={[
        { x: "a", y: 35 },
        { x: "b", y: 55 },
        { x: "c", y: 10 },
      ]}
      height={140}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      subTitle="Vul"
      title="100"
      width={140}
    />
  );
  const VulnerabilityCount = () => (
    <GridItem span={8}>
      <TextContent className="vulnerability-count-overview">
        <Text>
          <SecurityIcon />
          <strong>11</strong> Critical vulnerabilities
        </Text>
      </TextContent>
    </GridItem>
  );

  return (
    // @ts-ignore
    <Flex
      className="example-border"
      justifyContent={{ default: "justifyContentSpaceBetween" }}
    >
      <FlexItem>
        <Grid hasGutter>
          <GridItem>
            <Flex key="2" direction={{ default: "column" }}>
              <FlexItem spacer={{ default: "spacerNone" }}>
                <Split>
                  <SplitItem>
                    <Title headingLevel="h6" size="md">
                      Latest Version
                      <div>{drawerData.latest_version}</div>
                    </Title>
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
        </Grid>
      </FlexItem>
      <FlexItem>
        <Grid>
          <GridItem>
            <GithubStats
              contributors={Number(drawerData.github.contributors)}
              dependentRepos={Number(drawerData.github.dependent_repos)}
              usage={Number(drawerData.github.used_by.length)}
              forks={Number(drawerData.github.forks_count)}
              stars={Number(drawerData.github.stargazers_count)}
            />
          </GridItem>
        </Grid>
      </FlexItem>
      <FlexItem>
        <Grid>
          <GridItem span={6}>
            <SummaryDonut />
          </GridItem>
          <VulnerabilityCount />
          <VulnerabilityCount />
          <VulnerabilityCount />
          <VulnerabilityCount />
          <VulnerabilityCount />
        </Grid>
      </FlexItem>
    </Flex>
  );
}

export default VersionDetails;
