const BASE_LINE = 1000000;

function randomDate() {
  const start = new Date('01-01-2018');
  const end = new Date('01-01-2019');
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function* RecordGenerator() {
  let index = 0;
  const bogusId = BASE_LINE + index;
  const now = new Date().getTime();
  index += 1;
  yield {
    depPositionId: bogusId,
    arrPositionId: bogusId,
    userId: bogusId,
    createdAt: new Date((now / 1000 + index) * 1000),
    departureTime: randomDate(),
  };
}

const records = [];
const gen = new RecordGenerator();
for (let i = 0; i < 200000; i += 1) {
  records.push(gen.next().value);
}

export default records;
