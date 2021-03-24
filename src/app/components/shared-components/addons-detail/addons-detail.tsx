import React from 'react';
import {
  Flex,
  FlexItem,
  Split,
  SplitItem,
  Title,
} from '@patternfly/react-core';
import { ZoneIcon } from '@patternfly/react-icons';

class Addons extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return [
      <Flex>
        <FlexItem>
          <ZoneIcon className="icon-class" />
        </FlexItem>
        <FlexItem>
          <Title headingLevel="h6" size="md">
            Add-ons
          </Title>
        </FlexItem>
      </Flex>,
      <Flex>
        <FlexItem>
          <Split hasGutter>
            <SplitItem>Companion Dependencies:</SplitItem>
            <SplitItem>
              <Title headingLevel="h6" size="md">
                3
              </Title>
            </SplitItem>
          </Split>
        </FlexItem>
      </Flex>,
    ];
  }
}

export default Addons;
