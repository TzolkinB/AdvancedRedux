import { connect } from 'react-redux';
import { 
  setCounties, setFilter, setCountySort
} from './../redux/counties'

const filterCounties = (filter, counties) => {
  if(!filter) {
    return counties;
  }
  return counties.filter(item => {
    const countyMatches = item.county.toLowerCase().includes(filter.toLowerCase());
    return countyMatches;
  });
}

const mapStateToProps = state => {
  const {counties} = state;
  return { 
    filterTerm: counties.filter,
    counties: filterCounties(counties.filter, counties.all),
    countySort: counties.countySort
  };
}

const mapDispatchToProps = dispatch => {
  return { 
    handleSetCounties: () => dispatch(setCounties()),
    handleSetFilter: data => dispatch(setFilter(data)),
    handleSort: order => dispatch(setCountySort(order))
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
