import { isNumber } from "./";

describe("isNumber cases", () => {
  test.each`
    input    | expected
    ${1}     | ${true}
    ${{}}    | ${false}
    ${[]}    | ${false}
    ${false} | ${false}
  `("should return $expected when input is: $input", ({ input, expected }) => {
    expect(isNumber(input)).toBe(expected);
  });
});
