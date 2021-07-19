import employeeData from '../apis/employeeData';

export const fetchData = () => async dispatch => {
  const response = await employeeData.get();

  dispatch({ type: 'FETCH_DATA', payload: response.data.results });
};

export const setSearchFilter = value => {
  return { type: 'SET_SEARCH_FILTER', value }
};