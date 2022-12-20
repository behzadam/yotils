import { isNull } from './';

describe('isNull cases', () => {
  test.each`
    input        | expected
    ${null}      | ${true}
    ${undefined} | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
  `('should return $expected when input is: $input', ({ input, expected }) => {
    expect(isNull(input)).toBe(expected);
  });
});
