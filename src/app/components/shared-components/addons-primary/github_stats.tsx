import React from "react";
import {
  Flex,
  FlexItem,
  Split,
  SplitItem,
  Title,
} from "@patternfly/react-core";
import {
  UserAltIcon,
  CodeBranchIcon,
  StarIcon,
  GithubIcon,
  CodeIcon,
} from "@patternfly/react-icons";

type GithubStatsProps = {
  contributors: number;
  dependentRepos: number;
  usage: number;
  forks: number;
  stars: number;
};

const GithubStats = ({
  contributors,
  dependentRepos,
  usage,
  forks,
  stars,
}: GithubStatsProps) => {
  return (
    <div>
      <Flex key="1">
        <FlexItem>
          <Title headingLevel="h6" size="md">
            GitHub Stastistics
          </Title>
        </FlexItem>
      </Flex>
      <Flex key="2" direction={{ default: "column" }}>
        <FlexItem spacer={{ default: "spacerNone" }}>
          <Split hasGutter>
            <UserAltIcon className="icon-class" />
            <SplitItem>Contributors:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                {contributors}
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
        <FlexItem spacer={{ default: "spacerNone" }}>
          <Split hasGutter>
            <CodeIcon className="icon-class" />
            <SplitItem>DependentRepos:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                {dependentRepos}
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
        <FlexItem spacer={{ default: "spacerNone" }}>
          <Split hasGutter>
            <GithubIcon className="icon-class" />
            <SplitItem>Usage:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                {usage}
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
        <FlexItem spacer={{ default: "spacerNone" }}>
          <Split hasGutter>
            <CodeBranchIcon className="icon-class" />
            <SplitItem>Forks:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                {forks}
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
        <FlexItem spacer={{ default: "spacerNone" }}>
          <Split hasGutter>
            <StarIcon className="icon-class" />
            <SplitItem>Stars:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                {stars}
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
      </Flex>
    </div>
  );
};

export default GithubStats;
