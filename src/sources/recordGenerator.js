const BASE_LINE = 1000000;

function randomDate() {
  const start = new Date('01-01-2018');
  const end = new Date('01-01-2019');
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function* recordGenerator() {
  let index = 0;
  while (index < index + 1) {
    index += 1;
    const bogusId = BASE_LINE + index;
    const now = new Date().getTime();
    yield {
      depPositionId: bogusId,
      arrPositionId: bogusId,
      userId: bogusId,
      createdAt: new Date((now / 100000 - index) * 100000),
      departureTime: randomDate(),
    };
  }
}

const records = [];
const gen = recordGenerator();
for (let i = 0; i < 200000; i += 1) {
  records.push(gen.next().value);
}

export default records;
