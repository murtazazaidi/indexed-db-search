import { connect } from 'react-redux';
import App from 'components/App';

import {
  loadDataAction,
  pageChange,
} from 'store/actions/RecordActions';

function mapStateToProps(state) {
  const { record } = state;
  const {
    pageNo, pageSize, isLoading, dataList, totalRecords,
  } = record;
  const start = (pageNo - 1) * pageSize;
  const end = start + pageSize;
  return {
    records: dataList.slice(start, end),
    isLoading,
    pageNo,
    pageSize,
    totalRecords,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadDataAction()),
    pageChange: pageNo => dispatch(pageChange(pageNo)),
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
