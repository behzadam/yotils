import { isDate } from '../is-date';

describe('isDate cases', () => {
  test.each`
    input                    | expected
    ${new Date(2000, 1, 1)}  | ${true}
    ${'29 Feb 2020'}         | ${false}
    ${null}                  | ${false}
    ${undefined}             | ${false}
    ${2023}                  | ${false}
    ${'2023-10-05'}          | ${false}
    ${new Date('invalid')}   | ${false}
    ${[]}                    | ${false}
    ${{}}                    | ${false}
    ${new Date().toString()} | ${false}
    ${new Date(0)}           | ${true}
    ${'01 Jan 1970'}         | ${false}
    ${NaN}                   | ${false}
    ${true}                  | ${false}
    ${false}                 | ${false}
  `('returns $expected when input is: $input', ({ input, expected }) => {
    expect(isDate(input)).toBe(expected);
  });
});
