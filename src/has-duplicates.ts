import { Primitive } from "./types";

/**
 * Determines whether an array has duplicates.
 * @param array - input
 * @returns true if array has duplicates, false otherwise.
 * @example
 * ```ts
 * hasDuplicates(["one", "one", "two"]) // true
 * hasDuplicates([1, 2, 3, 3]) // true
 * hasDuplicates(["one", "two", "three"]) // false
 * ```
 *
 * @public
 */
export function hasDuplicates<T extends keyof Primitive>(array: T[]): boolean {
  return new Set(array).size < array.length;
}
