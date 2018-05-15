import tableData from './../data/audit-intents.json'

const initialState = {
  all: [],
  filter: null,
  countySort: {county: 'ASC'}
};

const UPDATE_FILTER  = 'auditIntent/UPDATE_FILTER';
const SET_COUNTIES   = 'auditIntent/SET_COUNTIES';
const SET_COUNTIES_SORT = 'auditIntent/SET_COUNTIES_SET';

const countyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return { ...state, filter: action.payload};
    case SET_COUNTIES:
      return { ...state, all: action.payload};
    case SET_COUNTIES_SORT:
      return { ...state, countySort: action.payload};
    default:
      return state;
  }
};

export default countyReducer;

export const setFilter = data => {
  return {type: UPDATE_FILTER, payload: data};
};

export const setCounties = () => {
  return {type: SET_COUNTIES, payload: tableData}
}

export const setCountySort = order => {
  return {type: SET_COUNTIES_SORT, payload: order}
}
