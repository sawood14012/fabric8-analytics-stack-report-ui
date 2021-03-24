import React from 'react';
import {
  Flex,
  FlexItem,
  Split,
  SplitItem,
  Title,
} from '@patternfly/react-core';
import { ExclamationCircleIcon, SecurityIcon } from '@patternfly/react-icons';

class Security extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return [
      <Flex>
        <FlexItem>
          <SecurityIcon className="icon-class" />
        </FlexItem>
        <FlexItem>
          <Title headingLevel="h6" size="md">
            Security Issues
          </Title>
        </FlexItem>
        <FlexItem>
          <ExclamationCircleIcon className="icon-class-exclamation" />
        </FlexItem>
      </Flex>,
      <Flex>
        <FlexItem>
          <Split hasGutter>
            <SplitItem>Total vulnerabilities:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                87
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
        <FlexItem>
          <Split hasGutter>
            <SplitItem>Vulnerable dependencies:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                18
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
      </Flex>,
    ];
  }
}

export default Security;
