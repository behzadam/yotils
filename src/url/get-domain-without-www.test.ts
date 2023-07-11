import { getDomainWithoutWWW } from './get-domain-without-www';

describe('getDomainWithoutWWW', () => {
  test.each`
    input                               | expected
    ${'https://www.example.com'}        | ${'example.com'}
    ${'http://google.com'}              | ${'google.com'}
    ${'https://www.amazon.co.uk/books'} | ${'amazon.co.uk'}
    ${'https://'}                       | ${null}
  `('returns $expected when input is: $input', ({ input, expected }) => {
    expect(getDomainWithoutWWW(input)).toBe(expected);
  });
});
