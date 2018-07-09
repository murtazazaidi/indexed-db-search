import loadData from 'sources/RecordSource';

import {
  LOAD_DATA_INIT,
  LOAD_MORE_DATA_INIT,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILED,
} from 'action-labels/recordLabels';

// normal actions
export const loadDataInit = userSearchTerm => ({
  type: LOAD_DATA_INIT,
  data: userSearchTerm,
});

export const searchMoreUserInit = userSearchTerm => ({
  type: LOAD_MORE_DATA_INIT,
  data: userSearchTerm,
});

export const loadDataSuccess = data => ({
  type: LOAD_DATA_SUCCESS,
  data,
});

export const loadDataFailed = data => ({
  type: LOAD_DATA_FAILED,
  data,
});

// Async Action
export const loadDataAction = () => loadData();
