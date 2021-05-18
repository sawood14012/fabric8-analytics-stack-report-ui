import React from "react";
import {
  Flex,
  FlexItem,
  Split,
  SplitItem,
  Title,
} from "@patternfly/react-core";
import { ZoneIcon } from "@patternfly/react-icons";

type AddonsProps = {
  companion: number;
};

const Addons = ({ companion }: AddonsProps) => {
  return (
    <div>
      <Flex key="1">
        <FlexItem>
          <ZoneIcon className="icon-class" />
        </FlexItem>
        <FlexItem>
          <Title headingLevel="h6" size="md">
            Add-ons
          </Title>
        </FlexItem>
      </Flex>
      <Flex key="2" direction={{ default: "column" }}>
        {companion > 0 && (
          <FlexItem spacer={{ default: "spacerNone" }}>
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
      </Flex>
    </div>
  );
};

export default Addons;
