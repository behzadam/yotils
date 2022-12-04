import { getTag } from "./index";

describe("getTag cases", () => {
  test.each`
    input        | expected
    ${new Set()} | ${"[object Set]"}
    ${new Map()} | ${"[object Map]"}
    ${{}}        | ${"[object Object]"}
    ${""}        | ${"[object String]"}
    ${1}         | ${"[object Number]"}
  `("should return $expected when input is: $input", ({ input, expected }) => {
    expect(getTag(input)).toBe(expected);
  });
});
