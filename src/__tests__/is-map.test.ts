import { isMap } from '..';

describe('isMap cases', () => {
  test.each`
    input                        | expected
    ${new Map<string, number>()} | ${true}
    ${{ id: 1 }}                 | ${false}
    ${[1, 2, 3]}                 | ${false}
  `('should return $expected when input is: $input', ({ input, expected }) => {
    expect(isMap(input)).toBe(expected);
  });
});
