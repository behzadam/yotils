import isDateValid from "../src/date/isDateValid";

const validCases = test.each`
  input                                  | expected
  ${"Tue Feb 01 2022 00:00:00 GMT+0000"} | ${true}
`;

const invalidCases = test.each`
  input                                  | expected
  ${"Tue Feb 44 2022 00:00:00 GMT+0000"} | ${false}
`;

describe("isDateValid valid cases", () => {
  validCases(
    "should return $expected when input is: $input",
    ({ input, expected }) => {
      expect(isDateValid(input)).toBe(expected);
    }
  );
});

describe("isDateValid invalid cases", () => {
  invalidCases(
    "should return $expected when input is: $input",
    ({ input, expected }) => {
      expect(isDateValid(input)).toBe(expected);
    }
  );
});
