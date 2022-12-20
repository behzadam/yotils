import { isNumber } from './';

describe('isNumber cases', () => {
  test.each`
    input       | expected
    ${1}        | ${true}
    ${NaN}      | ${false}
    ${Infinity} | ${false}
    ${'1'}      | ${false}
  `('should return $expected when input is: $input', ({ input, expected }) => {
    expect(isNumber(input)).toBe(expected);
  });
});
