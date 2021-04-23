import ReactDOM from 'react-dom';
import '@patternfly/react-core/dist/styles/base.css';

import React from 'react';
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

type DrawerState = {
  isExpanded: boolean;
};

// eslint-disable-next-line
type DrawerProps = {};

class DrawerStack extends React.Component<DrawerProps, DrawerState> {
  drawerRef: any;

  // onExpand: () => void;

  onClick: () => void;

  onCloseClick: () => void;

  constructor(props: any) {
    super(props);
    this.state = {
      isExpanded: false,
    };
    this.drawerRef = React.createRef();

    /*
    this.onExpand = () => {
      this.drawerRef.current && this.drawerRef.current.focus();
    };
    */

    this.onClick = () => {
      const { isExpanded } = this.state;
      const tempExpanded = !isExpanded;
      this.setState({
        isExpanded: tempExpanded,
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isExpanded: false,
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
    const panelContent = (
      <DrawerPanelContent>
        <DrawerHead>
          <h3 className="pf-c-title pf-m-2xl" ref={this.drawerRef}>
            drawer title{' '}
          </h3>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
          drawer-panel
        </DrawerHead>
        <DrawerPanelBody hasNoPadding>
          drawer-panel with no padding
        </DrawerPanelBody>
        <DrawerPanelBody>drawer-panel</DrawerPanelBody>
      </DrawerPanelContent>
    );

    return [
      <div>
        <Button onClick={this.onClick} />
        <Drawer isExpanded={isExpanded}>
          <DrawerContent panelContent={panelContent} />
        </Drawer>
      </div>,
    ];
  }
}

export default DrawerStack;
