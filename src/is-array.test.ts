import { isArray } from './';

describe('isArray cases', () => {
  test.each`
    input                     | expected
    ${[1, 1, 1]}              | ${true}
    ${['one', 'one']}         | ${true}
    ${[{ id: 1 }, { id: 2 }]} | ${true}
    ${'string'}               | ${false}
    ${null}                   | ${false}
  `('should return $expected when input is: $input', ({ input, expected }) => {
    expect(isArray(input)).toBe(expected);
  });
});
