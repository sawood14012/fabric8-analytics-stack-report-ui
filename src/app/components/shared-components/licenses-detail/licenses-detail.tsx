import React from 'react';
import {
  Flex,
  FlexItem,
  Split,
  SplitItem,
  Title,
} from '@patternfly/react-core';
import { ExclamationCircleIcon, FileAltIcon } from '@patternfly/react-icons';

class Licenses extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
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
        <FlexItem>
          <ExclamationCircleIcon className="icon-class-exclamation" />
        </FlexItem>
      </Flex>,
      <Flex>
        <FlexItem>
          <Split hasGutter>
            <SplitItem>License conflicts:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                2
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
        <FlexItem>
          <Split hasGutter>
            <SplitItem>Unknown licenses:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                1
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
      </Flex>,
    ];
  }
}

export default Licenses;
