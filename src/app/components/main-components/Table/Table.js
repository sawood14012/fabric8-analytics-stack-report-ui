import "@patternfly/react-core/dist/styles/base.css";

import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  compoundExpand,
  sortable,
} from "@patternfly/react-table";

import CodeBranchIcon from "@patternfly/react-icons/dist/js/icons/code-branch-icon";
import CodeIcon from "@patternfly/react-icons/dist/js/icons/code-icon";
import CubeIcon from "@patternfly/react-icons/dist/js/icons/cube-icon";

// https://github.com/patternfly/patternfly-react/blob/master/packages/react-table/src/components/Table/examples/DemoSortableTable.js
import DemoSortableTable from "./DemoSortableTable";
import { ExclamationCircleIcon, SecurityIcon } from "@patternfly/react-icons";
import {
  Divider,
  Flex,
  FlexItem,
  Split,
  SplitItem,
  TextContent,
  Title,
} from "@patternfly/react-core";
import VersionDetails from "./VersionDetails";

export default class Tableview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "Dependencies",
        },
        {
          title: "Dependency Check",
        },
        {
          title: "Current Version",
          cellTransforms: [compoundExpand],
        },
        {
          title: "Direct Vulnerabilities",
          cellTransforms: [compoundExpand],
        },
        {
          title: "Transitive Vulnerabilities",
          cellTransforms: [compoundExpand],
        },
        {
          title: "Recommended Version",
        },
      ],
      rows: [
        {
          isOpen: true,
          cells: [
            {
              title: <a href="#">siemur/test-space</a>,
              props: { component: "th" },
            },
            {
              title: (
                <Flex
                  key="1"
                  direction={{ default: "column" }}
                  display={{ default: "inlineFlex" }}
                >
                  <FlexItem spacer={{ default: "spacerXs" }}>
                    <Split hasGutter>
                      <SplitItem>
                        <ExclamationCircleIcon className="icon-class-exclamation" />
                      </SplitItem>
                      <SplitItem>Security Issues</SplitItem>
                    </Split>
                    <Split hasGutter>
                      <SplitItem>
                        <ExclamationCircleIcon className="icon-class-exclamation" />
                      </SplitItem>
                      <SplitItem>Licence conflict</SplitItem>
                    </Split>
                  </FlexItem>
                </Flex>
              ),
              props: {
                isOpen: true,
                ariaControls: "compound-expansion-table-1",
              },
            },
            {
              title: <React.Fragment>1.49.0</React.Fragment>,
              props: {
                isOpen: false,
                ariaControls: "compound-expansion-table-2",
              },
            },
            {
              title: (
                <Flex
                  key="1"
                  direction={{ default: "column" }}
                  display={{ default: "inlineFlex" }}
                >
                  <FlexItem spacer={{ default: "spacerXs" }}>
                    <Split hasGutter>
                      <SplitItem>6</SplitItem>{" "}
                      <Divider
                        isVertical
                        inset={{
                          default: "insetMd",
                          md: "insetNone",
                          lg: "insetSm",
                          xl: "insetXs",
                        }}
                      />
                      <SplitItem>
                        <SecurityIcon className="icon-class" /> 1
                      </SplitItem>{" "}
                      <SplitItem>
                        <SecurityIcon className="icon-class" /> 2
                      </SplitItem>{" "}
                      <SplitItem>
                        <SecurityIcon className="icon-class" /> 3
                      </SplitItem>{" "}
                      <SplitItem>
                        <SecurityIcon className="icon-class" /> 4
                      </SplitItem>
                    </Split>
                  </FlexItem>
                </Flex>
              ),
              props: {
                isOpen: false,
                ariaControls: "compound-expansion-table-3",
              },
            },
            {
              title: (
                <Flex
                  key="1"
                  direction={{ default: "column" }}
                  display={{ default: "inlineFlex" }}
                >
                  <FlexItem spacer={{ default: "spacerXs" }}>
                    <Split hasGutter>
                      <SplitItem>6</SplitItem>{" "}
                      <Divider
                        isVertical
                        inset={{
                          default: "insetMd",
                          md: "insetNone",
                          lg: "insetSm",
                          xl: "insetXs",
                        }}
                      />
                      <SplitItem>
                        <SecurityIcon className="icon-class" /> 1
                      </SplitItem>{" "}
                      <SplitItem>
                        <SecurityIcon className="icon-class" /> 2
                      </SplitItem>{" "}
                      <SplitItem>
                        <SecurityIcon className="icon-class" /> 3
                      </SplitItem>{" "}
                      <SplitItem>
                        <SecurityIcon className="icon-class" /> 4
                      </SplitItem>
                    </Split>
                  </FlexItem>
                </Flex>
              ),
              props: {
                isOpen: false,
                ariaControls: "compound-expansion-table-4",
              },
            },
            "v0.7.0",
          ],
        },
        {
          parent: 0,
          compoundParent: 2,
          cells: [
            {
              title: <VersionDetails />,
              props: { colSpan: 6, className: "pf-m-no-padding" },
            },
          ],
        },
        {
          parent: 0,
          compoundParent: 3,
          cells: [
            {
              title: (
                <DemoSortableTable
                  columns={[
                    { title: "Direct Vulnerability", transforms: [sortable] },
                    "Severity",
                    { title: "CVSS Score", transforms: [sortable] },
                  ]}
                  rows={[
                    ["Man-in-the-Middle (MitM)", "High", "8.8/10"],
                    ["Cross site scripting (XSS)", "Medium", "5.5/10"],
                  ]}
                  id="compound-expansion-table-2"
                />
              ),
              props: { colSpan: 6, className: "pf-m-no-padding" },
            },
          ],
        },
        {
          parent: 0,
          compoundParent: 4,
          cells: [
            {
              title: (
                <DemoSortableTable
                  columns={[
                    {
                      title: "Transitive Vulnerability",
                      transforms: [sortable],
                    },
                    "Severity",
                    { title: "CVSS Score", transforms: [sortable] },
                    "Transitive dependency",
                    "Current Version",
                    "Latest Version",
                  ]}
                  rows={[
                    [
                      " XML External Entity (XXE) Injection",
                      "High",
                      "8.8/10",
                      "com.fasterxml.jackson.core:jackson-databind",
                      "4.8",
                      "5.8",
                    ],
                    [
                      "Remote Memory Exposure",
                      "Medium",
                      "5.8/10",
                      "org.eclipse.jetty:jetty-server",
                      "4.8",
                      "5.1",
                    ],
                    [
                      "Cross site scripting (XSS)",
                      "Medium",
                      "5.5/10",
                      "org.eclipse.jetty:jetty-server",
                      "4.8",
                      "7",
                    ],
                  ]}
                  id="compound-expansion-table-3"
                />
              ),
              props: { colSpan: 6, className: "pf-m-no-padding" },
            },
          ],
        },
      ],
    };
    this.onExpand = this.onExpand.bind(this);
  }

  onExpand(event, rowIndex, colIndex, isOpen, rowData, extraData) {
    const { rows } = this.state;
    if (!isOpen) {
      // set all other expanded cells false in this row if we are expanding
      rows[rowIndex].cells.forEach((cell) => {
        if (cell.props) cell.props.isOpen = false;
      });
      rows[rowIndex].cells[colIndex].props.isOpen = true;
      rows[rowIndex].isOpen = true;
    } else {
      rows[rowIndex].cells[colIndex].props.isOpen = false;
      rows[rowIndex].isOpen = rows[rowIndex].cells.some(
        (cell) => cell.props && cell.props.isOpen,
      );
    }
    this.setState({
      rows,
    });
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        aria-label="Compound expandable table"
        onExpand={this.onExpand}
        rows={rows}
        cells={columns}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
