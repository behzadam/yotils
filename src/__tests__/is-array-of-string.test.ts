import { isArrayOfString } from '../is-array-of-string';

describe('isArrayOfString cases', () => {
  test.each`
    input              | expected
    ${['a', 'b', 'c']} | ${true}
    ${['a', 'b', 1]}   | ${false}
    ${[]}              | ${false}
    ${'a'}             | ${false}
    ${1}               | ${false}
    ${null}            | ${false}
    ${undefined}       | ${false}
  `('returns $expected when input is: $input', ({ input, expected }) => {
    expect(isArrayOfString(input)).toBe(expected);
  });
});
