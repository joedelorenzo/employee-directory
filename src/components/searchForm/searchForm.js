import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setSearchFilter } from '../../actions';
import './searchForm.scss';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(setSearchFilter(searchValue));
  }, [dispatch, searchValue]);

  return (
    <form onSubmit={e => e.preventDefault()}>
      <label for="search">Search:</label>
      <input
        autocomplete="off" // For demo purposes
        id="search" 
        name="search"
        type="search"
        placeholder="Search by First or Last Name"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
}

export default connect(null, {setSearchFilter})(SearchForm);