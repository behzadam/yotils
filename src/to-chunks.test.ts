import { toChunks } from './';

describe('toChunks cases', () => {
  test.each`
    input                                  | expected
    ${'Lorem ipsum is a placeholder text'} | ${['Lorem ips', 'um is a p', 'laceholde', 'r text']}
    ${'Lorem'}                             | ${['Lo', 're', 'm']}
  `('should return $expected when input is: $input', ({ input, expected }) => {
    expect(toChunks(input, 4)).toStrictEqual(expected);
  });
});
