import { groupBy } from '../group-by';

describe('groupBy cases', () => {
  const testData = [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
    { id: 3, name: 'Carol', role: 'admin' },
  ];

  const duplicateData = [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 1, name: 'Bob', role: 'user' },
    { id: 3, name: 'Carol', role: 'admin' },
  ];

  it('groups by id', () => {
    const result = groupBy(testData, (item) => item.id);
    const expected = {
      '1': testData[0],
      '2': testData[1],
      '3': testData[2],
    };
    expect(result).toStrictEqual(expected);
  });

  it('groups by role', () => {
    const result = groupBy(testData, (item) => item.role);
    const expected = {
      admin: testData[2],
      user: testData[1],
    };
    expect(result).toStrictEqual(expected);
  });

  it('groups by name', () => {
    const result = groupBy(testData, (item) => item.name);
    const expected = {
      Alice: testData[0],
      Bob: testData[1],
      Carol: testData[2],
    };
    expect(result).toStrictEqual(expected);
  });

  it('handles custom grouping by name length', () => {
    const result = groupBy(testData, (item) => item.name.length);
    const expected = {
      '5': testData[2],
      '3': testData[1],
    };
    expect(result).toStrictEqual(expected);
  });

  it('handles duplicate keys by keeping last value', () => {
    const result = groupBy(duplicateData, (item) => item.id);
    const expected = {
      '1': duplicateData[1],
      '3': duplicateData[2],
    };
    expect(result).toStrictEqual(expected);
  });
});
