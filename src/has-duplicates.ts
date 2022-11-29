import { Primitive } from "./types";

/**
 * Determines whether an array has duplicates.
 * @param array - input
 * @returns true if array has duplicates, false otherwise.
 *
 * @beta
 */
export function hasDuplicates<T extends keyof Primitive>(array: T[]): boolean {
  return new Set(array).size < array.length;
}
