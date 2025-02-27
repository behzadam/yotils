import { isDate } from '..';

describe('isDate cases', () => {
  test.each`
    input            | expected
    ${new Date()}    | ${true}
    ${'29 Feb 2020'} | ${false}
  `('should return $expected when input is: $input', ({ input, expected }) => {
    expect(isDate(input)).toBe(expected);
  });
});
