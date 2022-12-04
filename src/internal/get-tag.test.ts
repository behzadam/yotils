import { getTag } from "./index";

describe("isNumber cases", () => {
  test.each`
    input        | expected
    ${new Set()} | ${"[object Set]"}
  `("should return $expected when input is: $input", ({ input, expected }) => {
    expect(getTag(input)).toBe(expected);
  });
});
