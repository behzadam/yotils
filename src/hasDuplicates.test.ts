import hasDuplicates from "./hasDuplicates";

const validCases = test.each`
 array                    | expected
 ${[1, 1, 2]}             | ${true}
 ${['one', 'one', 'two']} | ${true}
`

const invalidCases = test.each`
 array                      | expected
 ${[1, 2, 3]}               | ${false}
 ${['one', 'two', 'three']} | ${false}
`

describe('hasDuplicates valid cases', () => {
  validCases('should return $expected when array is: $array',
    ({ array, expected }) => {
      expect(hasDuplicates(array)).toBe(expected)
    })
});

describe('hasDuplicates invalid cases', () => {
  invalidCases('should return $expected when array is: $array',
  ({ array, expected }) => {
    expect(hasDuplicates(array)).toBe(expected)
  })
});