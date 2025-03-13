import { areSame } from '../are-same';

describe('areSame', () => {
  test.each`
    input                      | expected
    ${[1, 1, 1]}               | ${true}
    ${['one', 'one', 'one']}   | ${true}
    ${[1.5, 1.5, 1.5]}         | ${true}
    ${[true, true, true]}      | ${true}
    ${[1, 2, 3]}               | ${false}
    ${['one', 'two', 'three']} | ${false}
    ${[1.5, 2.5, 3.5]}         | ${false}
    ${[true, false, true]}     | ${false}
  `('returns $expected when input is: $input', ({ input, expected }) => {
    expect(areSame(input)).toBe(expected);
  });
});
