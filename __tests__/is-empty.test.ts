import { isEmpty } from "@lib";

describe("isEmpty cases", () => {
  test.each`
    input        | expected
    ${[]}        | ${true}
    ${{}}        | ${true}
    ${""}        | ${true}
    ${{ id: 1 }} | ${false}
    ${[1]}       | ${false}
    ${"1"}       | ${false}
  `("should return $expected when input is: $input", ({ input, expected }) => {
    expect(isEmpty(input)).toBe(expected);
  });
});
