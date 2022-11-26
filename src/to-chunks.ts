/**
 * Split a string into N chunks of equal size.
 * The last chunk may be smaller.
 * @param input - string
 * @param chunkSize - number
 * @returns Array of chunks or an empty array.
 * @example
 * ```ts
 *  const chunks: string[] = toChunks("Lorem ipsum dolor sit amet, consectetur adipis", 4);
 * ```
 * @public
 */
function toChunks(input: string, chunkSize: number): string[] {
  const chunkCount = Math.ceil(input.length / chunkSize);
  const regexp = new RegExp(`.{1,${chunkCount}}`, "g");
  return input.match(regexp) ?? [];
}

export default toChunks;
