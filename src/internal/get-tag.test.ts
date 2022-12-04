import { getTag } from "./index";

describe("getTag cases", () => {
  test.each`
    input         | expected
    ${new Set()}  | ${"[object Set]"}
    ${new Map()}  | ${"[object Map]"}
    ${{}}         | ${"[object Object]"}
    ${""}         | ${"[object String]"}
    ${1}          | ${"[object Number]"}
    ${null}       | ${"[object Null]"}
    ${undefined}  | ${"[object Undefined]"}
    ${new Date()} | ${"[object Date]"}
    ${Symbol()}   | ${"[object Symbol]"}
  `("should return $expected when input is: $input", ({ input, expected }) => {
    expect(getTag(input)).toBe(expected);
  });
});
