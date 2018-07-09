/* eslint-disable no-param-reassign */
import * as recordLabels from 'action-labels/recordLabels';

const initialState = {
  dataList: [],
  isLoading: false,
  pageNo: 1,
  pageSize: 50,
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
    case recordLabels.LOAD_MORE_DATA_INIT: {
      state = Object.assign({}, state, {
        isLoading: true,
      });
      return state;
    }
    case recordLabels.LOAD_DATA_SUCCESS: {
      const dataList = action.data;
      const updatedList = state.dataList.concat(dataList);
      state = Object.assign({}, state, {
        dataList: updatedList,
        totalRecords: updatedList.length,
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
      const pageNo = action.data;
      state = Object.assign({}, state, { pageNo });
      return state;
    }

    default:
      return state;
  }
}
