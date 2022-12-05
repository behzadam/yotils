import { isString } from ".";

describe("isString cases", () => {
  test.each`
    input       | expected
    ${"string"} | ${true}
    ${"string"} | ${true}
    ${`string`} | ${true}
    ${123}      | ${false}
  `("should return $expected when input is: $input", ({ input, expected }) => {
    expect(isString(input)).toBe(expected);
  });
});
