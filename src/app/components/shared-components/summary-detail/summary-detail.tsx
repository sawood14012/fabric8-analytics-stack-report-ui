import React from 'react';
import {
  Flex,
  FlexItem,
  Split,
  SplitItem,
  Title,
} from '@patternfly/react-core';
import { CubeIcon, ExclamationCircleIcon } from '@patternfly/react-icons';

type DependencyProps = Record<string, number>;

class Dependency extends React.Component<DependencyProps> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: DependencyProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { analyzed, transitive, unknown } = this.props;
    return [
      <Flex>
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
      </Flex>,
      <Flex direction={{ default: 'column' }}>
        <FlexItem spacer={{ default: 'spacerNone' }}>
          <Split hasGutter>
            <SplitItem>Analysed dependencies:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                {analyzed}
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
        <FlexItem spacer={{ default: 'spacerNone' }}>
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
          <FlexItem spacer={{ default: 'spacerNone' }}>
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
      </Flex>,
    ];
  }
}

export default Dependency;
