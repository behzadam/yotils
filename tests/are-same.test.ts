import { areSame } from "@lib/are-same";

const validCases = test.each`
  input                    | expected
  ${[1, 1, 1]}             | ${true}
  ${["one", "one", "one"]} | ${true}
  ${[1.5, 1.5, 1.5]}       | ${true}
  ${[true, true, true]}    | ${true}
`;

const invalidCases = test.each`
  input                      | expected
  ${[1, 2, 3]}               | ${false}
  ${["one", "two", "three"]} | ${false}
  ${[1.5, 2.5, 3.5]}         | ${false}
  ${[true, false, true]}     | ${false}
`;

describe("areEqual valid cases", () => {
  validCases(
    "should return $expected when input is: $input",
    ({ input, expected }) => {
      expect(areSame(input)).toBe(expected);
    }
  );
});

describe("areEqual invalid cases", () => {
  invalidCases(
    "should return $expected when input is: $input",
    ({ input, expected }) => {
      expect(areSame(input)).toBe(expected);
    }
  );
});
