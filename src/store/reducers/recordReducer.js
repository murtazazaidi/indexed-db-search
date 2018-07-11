/* eslint-disable no-param-reassign */
import * as recordLabels from 'action-labels/recordLabels';

import { PAGE_SIZE } from 'config/constants';

const initialState = {
  dataList: [],
  isLoading: false,
  pageNo: 1,
  pageSize: PAGE_SIZE,
  totalRecords: 0,
};

export default function recordReducer(state = initialState, action) {
  switch (action.type) {
    case recordLabels.LOAD_DATA_INIT: {
      state = Object.assign({}, initialState, {
        isLoading: true,
        pageNo: 1,
      });
      return state;
    }
    case recordLabels.LOAD_DATA_SUCCESS: {
      const { dataList, totalRecords } = action.data;
      state = Object.assign({}, state, {
        dataList,
        totalRecords,
        isLoading: false,
        pageNo: 1,
      });
      return state;
    }
    case recordLabels.LOAD_DATA_FAILED: {
      state = Object.assign({}, state, { isLoading: false });
      return state;
    }
    case recordLabels.PAGE_CHANGE: {
      const { pageNo, records } = action.data;
      state = Object.assign({}, state, { pageNo, dataList: records });
      return state;
    }

    default:
      return state;
  }
}
