import {
  loadDataInit,
  loadDataSuccess,
  pageChange,
} from 'store/actions/RecordActions';

import { putBulkData, getData } from 'utils/indexedDB';

import normalize from 'normalizers/recordsList';

import records from 'sources/recordGenerator';
import { PAGE_SIZE } from 'config/constants';

const RECORD_SOURCE_KEY = 'rs-last-downloaded';

export const loadDataFromAPI = () => (async (dispatch) => {
  dispatch(loadDataInit());
  const lastDownloaded = localStorage.getItem(RECORD_SOURCE_KEY);
  if (lastDownloaded) {
    const start = 0;
    const end = PAGE_SIZE;
    const recordsData = await getData(null) || [];
    dispatch(loadDataSuccess({
      dataList: recordsData.slice(start, end),
      totalRecords: recordsData.length,
    }));
    return;
  }
  await setTimeout(() => {}, 2000);
  const recordsNormalized = normalize(records);
  putBulkData(recordsNormalized);
  localStorage.setItem(RECORD_SOURCE_KEY, new Date().getTime());
  dispatch(loadDataSuccess({
    dataList: recordsNormalized.slice(0, PAGE_SIZE),
    totalRecords: recordsNormalized.length,
  }));
});

export const loadDataFromLocal = pageNo => (async (dispatch) => {
  const start = (pageNo - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const recordsData = await getData(null) || [];
  dispatch(pageChange({
    pageNo,
    records: recordsData.slice(start, end),
  }));
});
