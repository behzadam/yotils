import { Primitive } from "./types";

/**
 * Determines whether an array has duplicates.
 * @param array - string | number | boolean
 * @returns boolean
 *
 * @beta
 */
export function hasDuplicates<T extends keyof Primitive>(array: T[]): boolean {
  return new Set(array).size < array.length;
}
