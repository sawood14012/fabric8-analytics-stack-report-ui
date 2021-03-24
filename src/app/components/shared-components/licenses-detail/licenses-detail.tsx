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
    return [
      <Flex>
        <FlexItem>
          <FileAltIcon className="icon-class" />
        </FlexItem>
        <FlexItem>
          <Title headingLevel="h6" size="md">
            Licences
          </Title>
        </FlexItem>
        {conflicts > 0 && (
          <FlexItem>
            <ExclamationCircleIcon className="icon-class-exclamation" />
          </FlexItem>
        )}
      </Flex>,
      <Flex>
        <FlexItem>
          <Split hasGutter>
            <SplitItem>License conflicts:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                {conflicts}
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
        <FlexItem>
          <Split hasGutter>
            <SplitItem>Unknown licenses:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                {unknown}
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
      </Flex>,
    ];
  }
}

export default Licenses;
