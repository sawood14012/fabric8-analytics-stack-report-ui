import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

const PoweredBySynk = () => {
  return (
    <Split hasGutter>
      <SplitItem>
        <p className="title">Powered by:</p>
      </SplitItem>
      <SplitItem>
        <img className="bitmap" id="imgHome" alt="snyk" src="assets/snyk.png" />
      </SplitItem>
    </Split>
  );
};

export default PoweredBySynk;
