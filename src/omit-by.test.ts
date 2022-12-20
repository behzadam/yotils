import { omitBy } from '.';

describe('omitBy cases', () => {
  const input = {
    key1: '1',
    key2: '2',
    key3: '',
    key4: { key5: '' },
  };
  const expected = {
    key1: '1',
    key2: '2',
    key4: {},
  };
  test.each`
    input    | expected
    ${input} | ${expected}
  `('should return $expected when input is: $input', ({ input, expected }) => {
    expect(omitBy(input, (item) => item !== null)).toStrictEqual(expected);
  });
});
