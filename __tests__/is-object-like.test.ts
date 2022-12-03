import { isObjectLike } from "@lib";

describe("isObjectLike cases", () => {
  test.each`
    input        | expected
    ${{}}        | ${true}
    ${{ id: 1 }} | ${true}
    ${[1, 2, 3]} | ${true}
    ${Function}  | ${false}
    ${null}      | ${false}
    ${1}         | ${false}
    ${true}      | ${false}
  `("should return $expected when input is: $input", ({ input, expected }) => {
    expect(isObjectLike(input)).toBe(expected);
  });
});
