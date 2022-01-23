import classify from "./classify";

const validCases = test.each`
 input                                | expected
 ${[1, 1, 1, 2]}                      | ${{'1': 3, '2': 1}}
 ${['in', 'love', 'love', 'love']}    | ${{'in': 1, 'love': 3}}
`
describe('classify valid cases', () => {
  validCases('should return $expected when input is: $input',
    ({ input, expected }) => {
      expect(classify(input)).toStrictEqual(expected)
    })
});
