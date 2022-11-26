import isArray from "../src/array/isArray";
import { describeGen } from "./utils/describe-gen";

const validCases = test.each`
  input             | expected
  ${[1, 1, 1]}      | ${true}
  ${["one", "one"]} | ${true}
`;

const invalidCases = test.each`
  input       | expected
  ${"string"} | ${false}
  ${null}     | ${false}
`;

describe(describeGen(isArray.name).valid, () => {
  validCases(
    "should return $expected when input is: $input",
    ({ input, expected }) => {
      expect(isArray(input)).toBe(expected);
    }
  );
});

describe(describeGen(isArray.name).valid, () => {
  invalidCases(
    "should return $expected when input is: $input",
    ({ input, expected }) => {
      expect(isArray(input)).toBe(expected);
    }
  );
});
