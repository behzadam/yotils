/**
 * Determines whether the input is an array or not.
 * @param input - Generic input.
 * @returns true if the input is an array or false otherwise.
 * @example
 * ```ts
 * isArray([{ id: 1 }, { id: 2 }]) // true
 * isArray(["one", "one"]) // true
 * isArray([{ id: 1 }, { id: 2 }]) // true
 * isArray('Is an array?') // false
 * ```
 * @public
 */
export function isArray<Input>(input: unknown): input is Array<Input> {
  return Array.isArray(input);
}
