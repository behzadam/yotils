import { isDateValid } from "./";

describe("isDateValid valid cases", () => {
  test.each`
    input            | expected
    ${"01/01/2000"}  | ${true}
    ${"31/01/2000"}  | ${true}
    ${"32/01/2000"}  | ${false}
    ${"01/1/2000"}   | ${true}
    ${"01/1/01"}     | ${true}
    ${"29/02/2000"}  | ${true}
    ${"28/02/2001"}  | ${true}
    ${"29/02/2001"}  | ${false}
    ${"29 Feb 2001"} | ${false}
    ${"29 Feb 2020"} | ${true}
    ${"26 OCT 2024"} | ${true}
    ${"01/Mar/2020"} | ${true}
    ${"1.1.1"}       | ${false}
  `("should return $expected when input is: $input", ({ input, expected }) => {
    expect(isDateValid(input)).toBe(expected);
  });
});
