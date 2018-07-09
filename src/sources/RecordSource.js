import {
  loadDataInit,
  loadDataSuccess,
} from 'store/actions/RecordActions';

import records from 'sources/RecordGenerator';

import normalize from 'normalizers/recordsList';

const loadData = () => ((dispatch) => {
  dispatch(loadDataInit());
  setTimeout(() => {
    const recordsNormalized = normalize(records);
    dispatch(loadDataSuccess(
      recordsNormalized,
    ));
  }, 3000);
});

export default loadData;
