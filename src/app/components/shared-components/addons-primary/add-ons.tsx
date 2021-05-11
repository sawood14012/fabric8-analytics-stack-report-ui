import '@patternfly/react-core/dist/styles/base.css';
import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

// eslint-disable-next-line
type TableProps = Record<any, any>;

// eslint-disable-next-line
function AddonsTable() {
  const columns = ['Companion Dependencies', 'Confidence Score', 'Feedback'];

  return (
    <Table cells={columns}>
      <TableHeader />
      <TableBody />
    </Table>
  );
}

export default AddonsTable;
