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
} from '@patternfly/react-core';

function DrawerStack() {
  const [isExpanded, setisExpanded] = useState(false);

  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <h3 className="pf-c-title pf-m-2xl">drawer title </h3>
        <DrawerActions>
          <DrawerCloseButton onClick={() => setisExpanded(false)} />
        </DrawerActions>
        drawer-panel
      </DrawerHead>
      <DrawerPanelBody hasNoPadding>
        drawer-panel with no padding
      </DrawerPanelBody>
      <DrawerPanelBody>drawer-panel</DrawerPanelBody>
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
