import { isEmpty } from "./";

describe("isEmpty cases", () => {
  test.each`
    input        | expected
    ${[]}        | ${true}
    ${{}}        | ${true}
    ${""}        | ${true}
    ${null}      | ${true}
    ${true}      | ${true}
    ${1}         | ${true}
    ${{ id: 1 }} | ${false}
    ${[1]}       | ${false}
    ${"1"}       | ${false}
  `("should return $expected when input is: $input", ({ input, expected }) => {
    expect(isEmpty(input)).toBe(expected);
  });
});
