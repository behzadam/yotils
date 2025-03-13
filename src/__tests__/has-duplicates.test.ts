import { hasDuplicates } from '../has-duplicates';

describe('hasDuplicates cases', () => {
  test.each`
    array                      | expected
    ${[1, 1, 2]}               | ${true}
    ${['one', 'one', 'two']}   | ${true}
    ${[1, 2, 3]}               | ${false}
    ${['one', 'two', 'three']} | ${false}
  `('returns $expected when array is: $array', ({ array, expected }) => {
    expect(hasDuplicates(array)).toBe(expected);
  });
});
