import { isValidUrl } from './is-valid-url';

describe('isValidUrl', () => {
  test.each`
    input                               | expected
    ${'https://www.example.com'}        | ${true}
    ${'http://google.com'}              | ${true}
    ${'https://www.github.io'}          | ${true}
    ${'https://www.amazon.co.uk/books'} | ${true}
    ${'http://localhost:3000'}          | ${true}
    ${'example.com'}                    | ${false}
    ${'https://'}                       | ${false}
    ${'www.example.com'}                | ${false}
    ${'http://256.0.0.1'}               | ${false}
  `('returns $expected when input is: $input', ({ input, expected }) => {
    expect(isValidUrl(input)).toBe(expected);
  });
});
