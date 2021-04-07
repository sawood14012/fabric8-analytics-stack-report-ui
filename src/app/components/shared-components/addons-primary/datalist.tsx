import ReactDOM from 'react-dom';

import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  KebabToggle,
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListCheck,
  DataListItemCells,
  DataListAction,
} from '@patternfly/react-core';

type DataListState = {
  isOpen1: boolean;
  isOpen2: boolean;
  selectedDataListItemId: string;
};

// eslint-disable-next-line
type DataProps = Record<any, any>;

class SelectableDataList extends React.Component<DataProps, DataListState> {
  onToggle1: any;

  onToggle2: any;

  onSelect1: any;

  onSelect2: any;

  onSelectDataListItem: any;

  constructor(props: any) {
    super(props);
    this.state = {
      isOpen1: false,
      isOpen2: false,
      selectedDataListItemId: '',
    };

    this.onToggle1 = (isOpen1: any) => {
      this.setState({ isOpen1 });
    };

    this.onToggle2 = (isOpen2: any) => {
      this.setState({ isOpen2 });
    };

    this.onSelect1 = (event: any) => {
      this.setState((isOpen1) => ({
        isOpen1: !isOpen1,
      }));
    };

    this.onSelect2 = (event: any) => {
      this.setState((isOpen2) => ({
        isOpen2: !isOpen2,
      }));
    };

    this.onSelectDataListItem = (id: any) => {
      this.setState({ selectedDataListItemId: id });
    };
  }

  render() {
    const { isOpen1, isOpen2, selectedDataListItemId } = this.state;
    return (
      <DataList
        aria-label="selectable data list example"
        selectedDataListItemId={selectedDataListItemId}
        onSelectDataListItem={this.onSelectDataListItem}
      >
        <DataListItem aria-labelledby="selectable-action-item1" id="item1">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <span id="selectable-action-item1">
                    Single actionable Primary content
                  </span>
                </DataListCell>,
                <DataListCell key="secondary content">
                  Single actionable Secondary content
                </DataListCell>,
              ]}
            />
            <DataListAction
              aria-labelledby="selectable-action-item1 selectable-action-action1"
              id="selectable-action-action1"
              aria-label="Actions"
              isPlainButtonAction
            >
              <Dropdown
                isPlain
                position={DropdownPosition.right}
                isOpen={isOpen1}
                onSelect={this.onSelect1}
                toggle={<KebabToggle onToggle={this.onToggle1} />}
                dropdownItems={[
                  <DropdownItem key="link">Link</DropdownItem>,
                  <DropdownItem key="action" component="button">
                    Action
                  </DropdownItem>,
                  <DropdownItem key="disabled link" isDisabled>
                    Disabled Link
                  </DropdownItem>,
                ]}
              />
            </DataListAction>
          </DataListItemRow>
        </DataListItem>

        <DataListItem aria-labelledby="selectable-actions-item2" id="item2">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <span id="selectable-actions-item2">
                    Selectable actions Primary content
                  </span>
                </DataListCell>,
                <DataListCell key="secondary content">
                  Selectable actions Secondary content
                </DataListCell>,
              ]}
            />
            <DataListAction
              aria-labelledby="selectable-actions-item2 selectable-actions-action2"
              id="selectable-actions-action2"
              aria-label="Actions"
              isPlainButtonAction
            >
              <Dropdown
                isPlain
                position={DropdownPosition.right}
                isOpen={isOpen2}
                onSelect={this.onSelect2}
                toggle={<KebabToggle onToggle={this.onToggle2} />}
                dropdownItems={[
                  <DropdownItem key="link">Link</DropdownItem>,
                  <DropdownItem key="action" component="button">
                    Action
                  </DropdownItem>,
                  <DropdownItem key="disabled link" isDisabled>
                    Disabled Link
                  </DropdownItem>,
                ]}
              />
            </DataListAction>
          </DataListItemRow>
        </DataListItem>
      </DataList>
    );
  }
}

export default SelectableDataList;
