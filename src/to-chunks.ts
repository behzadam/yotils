/**
 * Split a string into N chunks of equal size.
 * The last chunk may be smaller.
 * @param value - string
 * @param chunkSize - number
 * @returns Array of chunks or an empty array.
 * @example
 * ```ts
 *  toChunks("Lorem ipsum dolor sit amet, consectetur adipis", 4);
 * // ['Lorem ipsum ', 'dolor sit am', 'et, consecte', 'tur adipis' ]
 *  toChunks("Lorem ipsum", 4);
 * // [ 'Lor', 'em ', 'ips', 'um' ]
 * toChunks("Lor", 4);
 * // [ 'L', 'o', 'r' ]
 * ```
 * @beta
 */
export function toChunks(value: string, chunkSize: number): string[] {
  const chunkCount = Math.ceil(value.length / chunkSize);
  const regexp = new RegExp(`.{1,${chunkCount}}`, 'g');
  return value.match(regexp) ?? [];
}
