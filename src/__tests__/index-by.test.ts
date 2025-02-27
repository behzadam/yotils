import { indexBy } from '../index-by';

describe('indexBy cases', () => {
  const withUniqueKey = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
  ];

  const withUniqueKeyExpected = {
    '1': { id: 1, name: 'A' },
    '2': { id: 2, name: 'B' },
    '3': { id: 3, name: 'C' },
  };

  const withDuplicatedKey = [
    { id: 1, name: 'A' },
    { id: 1, name: 'B' },
    { id: 3, name: 'C' },
  ];

  // On duplicate keys should be replaced the repeated key with the last one.
  const withDuplicatedKeyExpected = {
    '1': { id: 1, name: 'B' },
    '3': { id: 3, name: 'C' },
  };

  test.each`
    input                | expected
    ${withUniqueKey}     | ${withUniqueKeyExpected}
    ${withDuplicatedKey} | ${withDuplicatedKeyExpected}
  `('should return $expected when input is: $input', ({ input, expected }) => {
    expect(indexBy([...input], 'id')).toStrictEqual(expected);
  });
});
