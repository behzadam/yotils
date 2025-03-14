import { countItems } from '../count-items';

describe('countItems cases', () => {
  test.each`
    input                             | expected
    ${[1, 1, 1, 2]}                   | ${{ '1': 3, '2': 1 }}
    ${['in', 'love', 'love', 'love']} | ${{ in: 1, love: 3 }}
    ${[]}                             | ${{}}
    ${[1]}                            | ${{ '1': 1 }}
  `('returns $expected when input is: $input', ({ input, expected }) => {
    expect(countItems(input)).toStrictEqual(expected);
  });
});
