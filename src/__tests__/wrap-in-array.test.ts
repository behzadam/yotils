import { wrapInArray } from '..';

describe('wrapInArray cases', () => {
  test.each`
    input    | expected
    ${'a'}   | ${['a']}
    ${1}     | ${[1]}
    ${['a']} | ${[['a']]}
  `('should return $expected when input is: $input', ({ input, expected }) => {
    expect(wrapInArray(input)).toEqual(expected);
  });
});
