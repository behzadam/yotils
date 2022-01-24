import isNotEmpty from "./isNotEmpty";

const validCases = test.each`
  input             | expected
  ${[1, 2, 3]}      | ${true}
  ${[true, false]}  | ${true}
`

const invalidCases = test.each`
  input    | expected
  ${[]}    | ${false}
`

describe('isNotEmpty valid cases', () => {
  validCases('should return $expected when input is: $input',
    ({ input, expected }) => {
      expect(isNotEmpty(input)).toBe(expected)
    })
});

describe('isNotEmpty invalid cases', () => {
  invalidCases('should return $expected when input is: $input',
  ({ input, expected }) => {
    expect(isNotEmpty(input)).toBe(expected)
  })
});