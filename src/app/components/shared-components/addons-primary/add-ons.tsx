import ReactDOM from 'react-dom';
import '@patternfly/react-core/dist/styles/base.css';

import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

// eslint-disable-next-line
type TableProps = Record<any, any>;

// eslint-disable-next-line
class AddonsTable extends React.Component {
  render() {
    const columns = ['Companion Dependencies', 'Confidence Score', 'Feedback'];

    return (
      <Table cells={columns}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

export default AddonsTable;
