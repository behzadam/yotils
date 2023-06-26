import { isArrayOfString } from './is-array-of-string';

describe('isArrayOfString cases', () => {
  test.each`
    input              | expected
    ${['a', 'b', 'c']} | ${true}
    ${['a', 'b', 1]}   | ${false}
  `('should return $expected when input is: $input', ({ input, expected }) => {
    expect(isArrayOfString(input)).toBe(expected);
  });
});
