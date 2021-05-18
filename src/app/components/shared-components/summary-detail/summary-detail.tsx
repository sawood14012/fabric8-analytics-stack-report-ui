import React from "react";
import {
  Flex,
  FlexItem,
  Split,
  SplitItem,
  Title,
} from "@patternfly/react-core";
import { CubeIcon, ExclamationCircleIcon } from "@patternfly/react-icons";

type DependencyProps = {
  analyzed: number;
  transitive: number;
  unknown: number;
};

const Dependency = ({ analyzed, transitive, unknown }: DependencyProps) => {
  return (
    <div>
      <Flex key="1">
        <FlexItem>
          <CubeIcon className="icon-class" />
        </FlexItem>
        <FlexItem>
          <Title headingLevel="h6" size="md">
            Dependency Details
          </Title>
        </FlexItem>
        {unknown > 0 && (
          <FlexItem>
            <ExclamationCircleIcon className="icon-class-exclamation" />
          </FlexItem>
        )}
      </Flex>
      <Flex key="2" direction={{ default: "column" }}>
        <FlexItem spacer={{ default: "spacerNone" }}>
          <Split hasGutter>
            <SplitItem>Analysed dependencies:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                {analyzed}
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
        <FlexItem spacer={{ default: "spacerNone" }}>
          <Split hasGutter>
            <SplitItem>Transitive dependencies:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                {transitive}
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
        {unknown > 0 && (
          <FlexItem spacer={{ default: "spacerNone" }}>
            <Split hasGutter>
              <SplitItem>Unknown dependencies:</SplitItem>
              <SplitItem>
                <Title headingLevel="h6" size="md">
                  {unknown}
                </Title>
              </SplitItem>
            </Split>
          </FlexItem>
        )}
      </Flex>
    </div>
  );
};

export default Dependency;
