import React from "react";
import { Card, CardTitle, CardBody, CardFooter } from "@patternfly/react-core";

class Tableview extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className="pf-global--BorderColor--100">
        <CardTitle>Header</CardTitle>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
  }
}

export default Tableview;
