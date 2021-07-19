import React from 'react';
import TableBody from '../tableBody/tableBody';
import TableHead from '../tableHead/tableHead';
import './table.scss';

const Table = () => {
  return (
    <table className="emp-dir-table">
      <TableHead />
      <TableBody />
    </table>
  );
}

export default Table;