import React from 'react';
import {
  Flex,
  FlexItem,
  Split,
  SplitItem,
  Title,
} from '@patternfly/react-core';
import { ExclamationCircleIcon, SecurityIcon } from '@patternfly/react-icons';

type SecurityProps = Record<string, number>;

class Security extends React.Component<SecurityProps> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: SecurityProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { vlunerablities, vulnerable } = this.props;
    const condition = vlunerablities > 0 || vulnerable > 0;
    return [
      <Flex key="1">
        <FlexItem>
          <SecurityIcon className="icon-class" />
        </FlexItem>
        <FlexItem>
          <Title headingLevel="h6" size="md">
            Security Issues
          </Title>
        </FlexItem>
        {condition && (
          <FlexItem>
            <ExclamationCircleIcon className="icon-class-exclamation" />
          </FlexItem>
        )}
      </Flex>,
      <Flex key="2" direction={{ default: 'column' }}>
        {vlunerablities >= 0 && (
          <FlexItem spacer={{ default: 'spacerNone' }}>
            <Split hasGutter>
              <SplitItem>Total vulnerabilities:</SplitItem>
              <SplitItem>
                <Title headingLevel="h6" size="md">
                  {vlunerablities}
                </Title>
              </SplitItem>
            </Split>
          </FlexItem>
        )}
        {vulnerable >= 0 && (
          <FlexItem spacer={{ default: 'spacerNone' }}>
            <Split hasGutter>
              <SplitItem>Vulnerable dependencies:</SplitItem>
              <SplitItem>
                <Title headingLevel="h6" size="md">
                  {vulnerable}
                </Title>
              </SplitItem>
            </Split>
          </FlexItem>
        )}
      </Flex>,
    ];
  }
}

export default Security;
