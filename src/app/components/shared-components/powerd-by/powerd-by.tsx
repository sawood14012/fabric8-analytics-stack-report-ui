import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

class PoweredBySynk extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Split hasGutter>
        <SplitItem>
          <p className="title">Powered by:</p>
        </SplitItem>
        <SplitItem>
          <img
            className="bitmap"
            id="imgHome"
            alt="snyk"
            src="assets/snyk.png"
          />
        </SplitItem>
      </Split>
    );
  }
}

export default PoweredBySynk;
