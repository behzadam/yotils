import { get } from '../get';

describe('get', () => {
  const obj = {
    a: [{ b: { c: 42 } }, { b: { c: 99 } }],
    x: { y: { z: 'Behzad' } },
  };

  test.each`
    input  | path          | defaultValue   | expected
    ${obj} | ${'a[0].b.c'} | ${undefined}   | ${42}
    ${obj} | ${'a[1].b.c'} | ${undefined}   | ${99}
    ${obj} | ${'x.y.z'}    | ${undefined}   | ${'Behzad'}
    ${obj} | ${'x.y.w'}    | ${'default'}   | ${'default'}
    ${obj} | ${'a[2].b.c'} | ${'not found'} | ${'not found'}
  `(
    'returns $expected when $path with input : $input and default: $defaultValue',
    ({ input, path, defaultValue, expected }) => {
      expect(get(input, path, defaultValue)).toBe(expected);
    },
  );
});
