import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../actions';
import TableRow from '../tableRow/tableRow';

const TableBody = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.dataReducer);
  const filter = useSelector(state => state.searchReducer.filter);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const row = (index, user) => {
    return (
      <TableRow
        key={index}
        image={user.picture.thumbnail}
        index={index}
        name={user.name.first}
        last={user.name.last}
        email={user.email}
      />
    )
  }
  return (
    <tbody>
      { !filter
          ? users.map((user, index) => (
            row(index, user)
          ))
          : (users.filter((user) => (
            user.name.first.toLowerCase().includes(filter) || user.name.last.toLowerCase().includes(filter))).map((user, index) => (
              row(index, user)
            )
          ))
      }
    </tbody>
  )
}

export default connect(null, { fetchData })(TableBody);
