import { connect } from 'react-redux';
import App from 'components/App';

import {
  loadDataAction,
} from 'store/actions/RecordActions';

function mapStateToProps(state) {
  const { record } = state;
  return {
    isLoading: record.isLoading,
    records: record.dataList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadDataAction()),
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
