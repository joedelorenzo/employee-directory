import React from 'react';
import './tableHead.scss';

const TableHead = () => {
  return (
    <tr className="emp-dir-table-head emp-dir-table-row">
      <td>.</td>
      <td>Image</td>
      <td><button>First</button></td>
      <td><button>Last</button></td>
      <td>Email</td>
    </tr>
  );
}

export default TableHead;