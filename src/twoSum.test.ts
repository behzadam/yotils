import twoSum from "./twoSum"

const validCases = test.each`
  nums                |    target  |     expected
  ${[2, 7, 11, 15]}   |    ${9}    |     ${[0, 1]}
  ${[2, 7, 11, 15]}   |    ${18}   |     ${[1, 2]}
  ${[2, 7, 11, 15]}   |    ${26}   |     ${[2, 3]}
`

const invalidCases = test.each`
  nums                |    target  |     expected
  ${[2, 7, 11, 15]}   |    ${100}  |     ${[]}
  ${[2, 7, 11, 15]}   |    ${102}  |     ${[]}
  ${[2, 7, 11, 15]}   |    ${70}   |     ${[]}
`

describe('twoSum valid cases', () => {
  validCases('should return $expected when input is: $nums and target is: $target', ({ nums, target, expected }) => {
    expect(twoSum(nums, target)).toStrictEqual(expected)
  })
});

describe('twoSum invalid cases', () => {
  invalidCases('should return $expected when input is: $nums and target is: $target', ({ nums, target, expected }) => {
    expect(twoSum(nums, target)).toStrictEqual(expected)
  })
});
