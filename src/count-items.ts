import { Primitive } from "@lib/types";
/**
 * Counts of repeated items in flattened arrays.
 * @param array - array of items.
 * @returns - key value list
 * @example
 * ```ts
 * countItems(["in", "love", "love", "love"]) // { in: 1, love: 3 }
 * ```
 * @beta
 */
function countItems<T extends Primitive>(array: T[]): Record<string, T> {
  return array.reduce((acc: any, current) => {
    acc[current] = !acc[current] ? 1 : ++acc[current];
    return acc;
  }, {} as Record<string, T>);
}

export default countItems;
