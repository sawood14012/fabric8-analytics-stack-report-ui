import React from 'react';
import {
  Flex,
  FlexItem,
  Split,
  SplitItem,
  Title,
} from '@patternfly/react-core';
import { ZoneIcon } from '@patternfly/react-icons';

type AddonsProps = Record<string, number>;

class Addons extends React.Component<AddonsProps> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: AddonsProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { companion } = this.props;
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
      <Flex direction={{ default: 'column' }}>
        {companion > 0 && (
          <FlexItem spacer={{ default: 'spacerNone' }}>
            <Split hasGutter>
              <SplitItem>Companion Dependencies:</SplitItem>
              <SplitItem>
                <Title headingLevel="h6" size="md">
                  {companion}
                </Title>
              </SplitItem>
            </Split>
          </FlexItem>
        )}
      </Flex>,
    ];
  }
}

export default Addons;
