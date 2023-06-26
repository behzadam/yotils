import { getLength } from './get-length';

describe('getLength cases', () => {
  test.each`
    input        | expected
    ${[]}        | ${0}
    ${[1, 2, 3]} | ${3}
    ${{}}        | ${0}
    ${{ id: 1 }} | ${1}
    ${true}      | ${0}
    ${1}         | ${0}
  `('should return $expected when input is: $input', ({ input, expected }) => {
    expect(getLength(input)).toBe(expected);
  });
});
