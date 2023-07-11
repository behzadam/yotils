import { getParamsFromURL } from './get-params-from-url';

describe('getParamsFromURL', () => {
  test.each`
    input                                        | expected
    ${'https://example.org/?a=1&b=2&c=3'}        | ${{ a: '1', b: '2', c: '3' }}
    ${'https://example.org/?t=Salz+%26+Pfeffer'} | ${{ t: 'Salz & Pfeffer' }}
    ${'https://example.org/'}                    | ${{}}
  `('returns $expected when input is: $input', ({ input, expected }) => {
    expect(getParamsFromURL(input)).toStrictEqual(expected);
  });
});
