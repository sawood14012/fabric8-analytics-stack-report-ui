import React from 'react';
import {
  Flex,
  FlexItem,
  Split,
  SplitItem,
  Title,
} from '@patternfly/react-core';
import { ExclamationCircleIcon, FileAltIcon } from '@patternfly/react-icons';

type LicensesProps = {
  conflicts: number;
  unknown: number;
};

const Licenses = ({ conflicts, unknown }: LicensesProps) => {
  const condition = conflicts > 0 || unknown > 0;

  return (
    <div>
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
      </Flex>
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
      </Flex>
    </div>
  );
};

export default Licenses;
