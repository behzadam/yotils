import { isObject } from "@lib";

describe("isObject cases", () => {
  test.each`
    input        | expected
    ${{}}        | ${true}
    ${{ id: 1 }} | ${true}
    ${Function}  | ${true}
    ${[1, 2, 3]} | ${true}
    ${null}      | ${false}
    ${1}         | ${false}
    ${true}      | ${false}
  `("should return $expected when input is: $input", ({ input, expected }) => {
    expect(isObject(input)).toBe(expected);
  });
});
