import { isDefined } from "@lib";

describe("isDefined cases", () => {
  test.each`
    input        | expected
    ${null}      | ${false}
    ${undefined} | ${false}
    ${""}        | ${true}
  `("should return $expected when input is: $input", ({ input, expected }) => {
    expect(isDefined(input)).toBe(expected);
  });
});
