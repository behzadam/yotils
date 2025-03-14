import { isUndefinedOrNull } from '..';

describe('isDefined cases', () => {
  test.each`
    input        | expected
    ${null}      | ${true}
    ${undefined} | ${true}
    ${''}        | ${false}
  `('returns $expected when input is: $input', ({ input, expected }) => {
    expect(isUndefinedOrNull(input)).toBe(expected);
  });
});
