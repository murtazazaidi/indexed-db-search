const normalizeRecord = record => ({
  ...record,
  key: record.depPositionId,
});

const normalizeRecordsList = recordsList => recordsList.map(normalizeRecord);

export default normalizeRecordsList;
