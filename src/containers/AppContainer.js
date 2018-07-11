import { connect } from 'react-redux';
import App from 'components/App';

import {
  loadDataAction,
  pageChangeAction,
} from 'store/actions/RecordActions';

function mapStateToProps(state) {
  const { record } = state;
  const {
    pageNo, pageSize, isLoading, dataList, totalRecords,
  } = record;
  return {
    records: dataList,
    isLoading,
    pageNo,
    pageSize,
    totalRecords,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadDataAction()),
    pageChange: pageNo => dispatch(pageChangeAction(pageNo)),
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
