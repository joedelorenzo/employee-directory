import React from 'react';

const TableRow = ({ index, image, name, last, email }) => {  
  return (
    <tr className="emp-dir-table-row">
      <td>{index+1}</td>
      <td><img src={image} alt={`${name} ${last}`}/></td>
      <td>{name}</td>
      <td>{last}</td>
      <td>{email}</td>
    </tr>
  )
}

export default TableRow;
