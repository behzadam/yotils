/**
 * Returns the spilted lists grouped by index.
 * They key should be unique and for  ununique keys it would be replaced with the last key.
 * @param array - of objects.
 * @param key - unique key
 * @returns grouped by index, key value list.
 * @example
 * ```ts
 * indexBy([
 *  { id: 1, name: "A" },
 *  { id: 2, name: "B" },
 *  { id: 3, name: "C" },
 *  ], 'id')
 *  // result:
 *  // {
 *  //  "1": { id: 1, name: "A" },
 *  //  "2": { id: 2, name: "B" },
 *  //  "3": { id: 3, name: "C" },
 *  // }
 *  indexBy([
 *  { id: 1, name: "A" },
 *  { id: 1, name: "B" },
 *  { id: 3, name: "C" },
 *  ], 'id')
 *  // result:
 *  // {
 *  //  "1": { id: 1, name: "B" },
 *  //  "3": { id: 3, name: "C" },
 *  // }
 * ```
 * @public
 */
export function indexBy<
  Item extends { [Key in keyof Item]: string | number | symbol },
  Key extends keyof Item,
>(array: Item[], key: Key): Record<Item[Key], Item> {
  return array.reduce(
    (acc, item) => ({ ...acc, [item[key]]: item }),
    {} as Record<Item[Key], Item>,
  );
}
