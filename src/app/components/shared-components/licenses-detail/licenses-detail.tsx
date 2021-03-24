import React from 'react';
import {
  Flex,
  FlexItem,
  Split,
  SplitItem,
  Title,
} from '@patternfly/react-core';
import { ExclamationCircleIcon, FileAltIcon } from '@patternfly/react-icons';

type LicensesProps = Record<string, number>;

class Licenses extends React.Component<LicensesProps> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: LicensesProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { conflicts, unknown } = this.props;
    const condition = conflicts > 0 || unknown > 0;
    return [
      <Flex key="1">
        <FlexItem>
          <FileAltIcon className="icon-class" />
        </FlexItem>
        <FlexItem>
          <Title headingLevel="h6" size="md">
            Licences
          </Title>
        </FlexItem>
        {condition && (
          <FlexItem>
            <ExclamationCircleIcon className="icon-class-exclamation" />
          </FlexItem>
        )}
      </Flex>,
      <Flex key="2" direction={{ default: 'column' }}>
        {conflicts >= 0 && (
          <FlexItem spacer={{ default: 'spacerNone' }}>
            <Split hasGutter>
              <SplitItem>License conflicts:</SplitItem>
              <SplitItem>
                <Title headingLevel="h6" size="md">
                  {conflicts}
                </Title>
              </SplitItem>
            </Split>
          </FlexItem>
        )}
        {unknown > 0 && (
          <FlexItem spacer={{ default: 'spacerNone' }}>
            <Split hasGutter>
              <SplitItem>Unknown licenses:</SplitItem>
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

export default Licenses;
