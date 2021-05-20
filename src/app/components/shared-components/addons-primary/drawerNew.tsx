import {
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  Progress,
  ProgressSize,
  ProgressMeasureLocation,
  ProgressVariant,
  Button,
  Split,
  SplitItem,
  Title,
  Text,
  TextVariants,
} from "@patternfly/react-core";
import {
  Table,
  TableHeader,
  TableBody,
  TableText,
  TableVariant,
} from "@patternfly/react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import GithubStats from "./github_stats";

const TextTable = (data: string) => {
  return <TableText wrapModifier="wrap">{data}</TableText>;
};

const ProgressBar = (data: number) => {
  const title = String(data).concat("%");
  return (
    <Progress
      value={data}
      title={title}
      size={ProgressSize.sm}
      measureLocation={ProgressMeasureLocation.none}
    />
  );
};

const FeedbackButtons = () => {
  return (
    <div>
      <Button variant="link" icon={<FontAwesomeIcon icon={faThumbsUp} />} />
      <Button variant="link" icon={<FontAwesomeIcon icon={faThumbsDown} />} />
    </div>
  );
};

const DrawerFC = () => {
  const [drawerSta, setDrawerState] = useState(false);
  const columns = ["Companion Dependencies", "Confidence Score", "Feedback"];
  const rows = [
    [
      { title: TextTable("org.apache.commons:commons-lang3") },
      { title: ProgressBar(85) },
      { title: FeedbackButtons() },
    ],
    [
      { title: TextTable("joda-time:joda-time") },
      { title: ProgressBar(63) },
      { title: FeedbackButtons() },
    ],
    [
      { title: TextTable("joda-time:joda-time") },
      { title: ProgressBar(63) },
      { title: FeedbackButtons() },
    ],
    [
      { title: TextTable("joda-time:joda-time") },
      { title: ProgressBar(63) },
      { title: FeedbackButtons() },
    ],
    [
      { title: TextTable("org.springframework.boot:spring-boot-starter-web") },
      { title: ProgressBar(60) },
      { title: FeedbackButtons() },
    ],
  ];
  const panelc = (
    <DrawerPanelContent>
      <DrawerHead>
        <h3 className="pf-c-title pf-m-2xl">Companion dependency </h3>
        <DrawerActions>
          <DrawerCloseButton onClick={() => setDrawerState(false)} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <Grid hasGutter>
          <GridItem span={6}>
            <Flex key="2" direction={{ default: "column" }}>
              <FlexItem spacer={{ default: "spacerNone" }}>
                <Split>
                  <SplitItem>
                    Latest Version
                    <div>3.11</div>
                  </SplitItem>
                </Split>
              </FlexItem>
              <FlexItem spacer={{ default: "spacerNone" }}>
                <Split>
                  <Title headingLevel="h6" size="md">
                    Licence(s) used
                    <div>Apache License,version2.0</div>
                  </Title>
                </Split>
              </FlexItem>
            </Flex>
          </GridItem>
          <GridItem span={6}>
            <GithubStats
              contributors={25}
              dependentRepos={2}
              usage={5}
              forks={10}
              stars={5}
            />
          </GridItem>
        </Grid>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );
  return (
    <Drawer className="DrawerSize" isExpanded={drawerSta}>
      <DrawerContent panelContent={panelc}>
        <DrawerContentBody>
            <Table
              className="tableHeight"
              aria-label="Sortable Table"
              cells={columns}
              rows={rows}
              isStickyHeader
              variant={TableVariant.compact}
            >
              <TableHeader />
              <TableBody onRowClick={(e, row) => setDrawerState(!drawerSta)} />
            </Table>
          
        </DrawerContentBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerFC;
