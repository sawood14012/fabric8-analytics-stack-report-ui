import React from 'react';
import {
  Flex,
  FlexItem,
  Split,
  SplitItem,
  Title,
} from '@patternfly/react-core';
import { CubeIcon, ExclamationCircleIcon } from '@patternfly/react-icons';

class Dependency extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
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
        <FlexItem>
          <ExclamationCircleIcon className="icon-class-exclamation" />
        </FlexItem>
      </Flex>,
      <Flex>
        <FlexItem>
          <Split hasGutter>
            <SplitItem>Analysed dependencies:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                17
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
        <FlexItem>
          <Split hasGutter>
            <SplitItem>Transitive dependencies:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                112
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
        <FlexItem>
          <Split hasGutter>
            <SplitItem>Unknown dependencies:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                10
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
      </Flex>,
    ];
  }
}

export default Dependency;
