import { Primitive } from './types';
/**
 * Counts of repeated items in flattened arrays.
 * @param array - array of items.
 * @returns - key value list
 * @example
 * ```ts
 * countItems(["in", "love", "love", "love"]) // { in: 1, love: 3 }
 * ```
 * @public
 */
export function countItems<Item extends Primitive>(
  array: Item[],
): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const item of array) {
    const key = item.toString();
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}
