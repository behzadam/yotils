/**
 * Split a string into N chunks of equal size.
 * The last chunk may be smaller.
 * @param input
 * @param chunkSize
 * @returns array of chunks of an empty array
 */
function splitIntoChunks(input: string, chunkSize: number): string[] {
  const chunkCount = Math.ceil(input.length / chunkSize);
  const regexp = new RegExp(`.{1,${chunkCount}}`, 'g');
  return input.match(regexp) ?? [];
}

export default splitIntoChunks;