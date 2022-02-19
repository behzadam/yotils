import { Primitive } from "../types";
/**
 * Counts of repeated items.
 * @param array - array of items.
 * @returns - key value list
 * @beta
 * #### Usage
 * ```ts
 * countItems(["in", "love", "love", "love"]) // { in: 1, love: 3 }
 * ```
 */
function countItems<T extends Primitive>(array: T[]): Record<string, T> {
  return array.reduce((acc: any, current) => {
    acc[current] = !acc[current] ? 1 : ++acc[current];
    return acc;
  }, {} as Record<string, T>);
}

export default countItems;
