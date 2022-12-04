import { isSet } from ".";

describe("isSet cases", () => {
  test.each`
    input                | expected
    ${new Set<string>()} | ${true}
    ${[1, 2, 3]}         | ${false}
  `("should return $expected when input is: $input", ({ input, expected }) => {
    expect(isSet(input)).toBe(expected);
  });
});
