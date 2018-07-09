/* eslint-disable no-param-reassign */
import * as recordLabels from 'action-labels/recordLabels';

const initialState = {
  dataList: [],
  isLoading: false,
  pageNo: 1,
};

export default function recordReducer(state = initialState, action) {
  switch (action.type) {
    case recordLabels.LOAD_DATA_INIT: {
      state = Object.assign({}, initialState, {
        isLoading: true,
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
        isLoading: false,
      });
      return state;
    }
    case recordLabels.LOAD_DATA_FAILED: {
      state = Object.assign({}, state, { isLoading: false });
      return state;
    }

    default:
      return state;
  }
}
