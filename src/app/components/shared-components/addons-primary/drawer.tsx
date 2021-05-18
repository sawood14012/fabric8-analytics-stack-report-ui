import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import '@patternfly/react-core/dist/styles/base.css';

import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Button,
  Grid,
  GridItem,
} from '@patternfly/react-core';
import GithubStats from './github_stats';

function DrawerStack() {
  const [isExpanded, setisExpanded] = useState(false);

  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <h3 className="pf-c-title pf-m-2xl">Companion dependency </h3>
        <DrawerActions>
          <DrawerCloseButton onClick={() => setisExpanded(false)} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <Grid hasGutter>
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
    <div>
      <Button onClick={() => setisExpanded(!isExpanded)} />
      <Drawer isExpanded={isExpanded}>
        <DrawerContent panelContent={panelContent} />
      </Drawer>
    </div>
  );
}

export default DrawerStack;
