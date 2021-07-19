const initialState = {};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_FILTER':
      return {...state, filter: action.value};
    default:
      return state;
  }
};